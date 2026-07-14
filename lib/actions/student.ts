"use server";

import { prisma } from "@/lib/prisma";
import { StudentFormData } from "@/lib/validations";
import { revalidatePath } from "next/cache";
import { BloodGroup, Genotype } from "@prisma/client";

export async function createStudent(data: StudentFormData) {
  try {
    const student = await prisma.student.create({
      data: {
        admissionNumber: data.admissionNumber,
        firstName: data.firstName,
        middleName: data.middleName || null,
        lastName: data.lastName,

        gender: data.gender as "MALE" | "FEMALE",

        dob: new Date(data.dob),

        state: data.state || null,
        nationality: data.nationality || null,
        religion: data.religion || null,
        address: data.address || null,

        phone: data.phone || null,
        email: data.email || null,

        bloodGroup: data.bloodGroup ? (data.bloodGroup as BloodGroup) : null,

        genotype: data.genotype ? (data.genotype as Genotype) : null,
        allergies: data.allergies || null,
        medicalCondition: data.medicalCondition || null,
        emergencyContact: data.emergencyContact || null,

        status: data.status as
          | "ACTIVE"
          | "PENDING"
          | "SUSPENDED"
          | "GRADUATED"
          | "TRANSFERRED",
      },
    });
    revalidatePath("/admin/students");
    return {
      success: true,
      student,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Unable to create student.",
    };
  }
}
