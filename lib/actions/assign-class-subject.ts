"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

import {
  classSubjectSchema,
  ClassSubjectInput,
} from "@/lib/validations/class-subject";

export async function assignClassSubject(values: ClassSubjectInput) {
  const validated = classSubjectSchema.parse(values);

  const existing = await prisma.classSubject.findUnique({
    where: {
      classId_subjectId: {
        classId: validated.classId,
        subjectId: validated.subjectId,
      },
    },
  });

  if (existing) {
    throw new Error("This subject has already been assigned to this class.");
  }

  await prisma.classSubject.create({
    data: validated,
  });

  revalidatePath("/admin/academics/class-subjects");
}
