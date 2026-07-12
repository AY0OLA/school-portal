"use server";

import { prisma } from "@/lib/prisma";
import { StudentFormData } from "@/lib/validations";
import { revalidatePath } from "next/cache";

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

      bloodGroup: data.bloodGroup,
      genotype: data.genotype,
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
