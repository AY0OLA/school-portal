"use server";

import { prisma } from "@/lib/prisma";
import { StudentFormData } from "@/lib/validations";
import { revalidatePath } from "next/cache";
import { BloodGroup, Genotype } from "@prisma/client";

export async function updateStudent(id: string, data: StudentFormData) {
  await prisma.student.update({
    where: { id },
    data: {
      firstName: data.firstName,
      middleName: data.middleName,
      lastName: data.lastName,

      gender: data.gender as "MALE" | "FEMALE",

      dob: new Date(data.dob),

      state: data.state,
      nationality: data.nationality,
      religion: data.religion,
      address: data.address,

      phone: data.phone,
      email: data.email,

      bloodGroup: data.bloodGroup ? (data.bloodGroup as BloodGroup) : null,

      genotype: data.genotype ? (data.genotype as Genotype) : null,
      allergies: data.allergies,
      medicalCondition: data.medicalCondition,
      emergencyContact: data.emergencyContact,

      status: data.status as any,
    },
  });
  revalidatePath("/admin/students");
  return {
    success: true,
  };
}
