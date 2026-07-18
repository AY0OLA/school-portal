"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { assignSubjectToExam } from "@/lib/services/exam-subject.service";

import {
  teacherSubjectSchema,
  TeacherSubjectInput,
} from "@/lib/validations/teacher-subject";

export async function assignSubject(values: TeacherSubjectInput) {
  const validated = teacherSubjectSchema.parse(values);

  const existing = await prisma.teacherSubject.findUnique({
    where: {
      teacherId_subjectId: {
        teacherId: validated.teacherId,
        subjectId: validated.subjectId,
      },
    },
  });

  if (existing) {
    throw new Error("This teacher has already been assigned to this subject.");
  }

  await prisma.teacherSubject.create({
    data: validated,
  });

  revalidatePath("/admin/academics/teacher-subjects");
}
export async function assignSubjectAction(examId: string, subjectId: string) {
  await assignSubjectToExam(examId, subjectId);

  revalidatePath(`/admin/examinations/${examId}/subjects`);

  return {
    success: true,
  };
}