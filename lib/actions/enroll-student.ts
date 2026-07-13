"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

import {
  enrollmentSchema,
  EnrollmentInput,
} from "@/lib/validations/enrollment";

export async function enrollStudent(values: EnrollmentInput) {
  const validated = enrollmentSchema.parse(values);

  // Prevent duplicate enrollment in the same session
  const existing = await prisma.enrollment.findUnique({
    where: {
      studentId_sessionId: {
        studentId: validated.studentId,
        sessionId: validated.sessionId,
      },
    },
  });

  if (existing) {
    throw new Error(
      "This student is already enrolled for the selected academic session.",
    );
  }

  await prisma.enrollment.create({
    data: validated,
  });

  revalidatePath("/admin/academics/enrollments");
}
