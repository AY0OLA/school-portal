"use server";

import { prisma } from "@/lib/prisma";
import { parentSchema, ParentFormData } from "@/lib/validations";

export async function updateParent(id: string, data: ParentFormData) {
  try {
    const validated = parentSchema.parse(data);

    await prisma.$transaction(async (tx) => {
      // Remove all existing student relationships
      await tx.student.updateMany({
        where: {
          parentId: id,
        },
        data: {
          parentId: null,
        },
      });

      // Update parent information
      await tx.parent.update({
        where: {
          id,
        },
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

      // Assign the selected students
      if (validated.students?.length) {
        await tx.student.updateMany({
          where: {
            id: {
              in: validated.students,
            },
          },
          data: {
            parentId: id,
          },
        });
      }
    });

    return {
      success: true,
      message: "Parent updated successfully.",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Unable to update parent.",
    };
  }
}
