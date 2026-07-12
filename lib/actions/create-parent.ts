"use server";

import { prisma } from "@/lib/prisma";
import { parentSchema, ParentFormData } from "@/lib/validations";

export async function createParent(data: ParentFormData) {
  try {
    const validated = parentSchema.parse(data);

    const parent = await prisma.$transaction(async (tx) => {
      const createdParent = await tx.parent.create({
        data: {
          // Personal Information
          firstName: validated.firstName,
          middleName: validated.middleName || null,
          lastName: validated.lastName,
          gender: validated.gender || null,
          relationship: validated.relationship || null,
          dob: validated.dob ? new Date(validated.dob) : null,

          // Contact
          phone: validated.phone,
          alternatePhone: validated.alternatePhone || null,
          email: validated.email || null,
          address: validated.address || null,
          state: validated.state || null,
          nationality: validated.nationality || null,

          // Employment
          occupation: validated.occupation || null,
          employer: validated.employer || null,

          // Media
          passport: validated.passport || null,
        },
      });

      if (validated.students?.length) {
        await tx.student.updateMany({
          where: {
            id: {
              in: validated.students,
            },
          },
          data: {
            parentId: createdParent.id,
          },
        });
      }

      return createdParent;
    });

    return {
      success: true,
      parent,
      message: "Parent created successfully.",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Unable to create parent.",
    };
  }
}
