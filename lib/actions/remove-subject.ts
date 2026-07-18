"use server";

import { prisma } from "@/lib/prisma";
import { removeSubjectFromExam } from "@/lib/services/exam-subject.service";
import { revalidatePath } from "next/cache";

export async function removeSubject(id: string) {
  await prisma.teacherSubject.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/academics/teacher-subjects");
}

export async function removeSubjectAction(examId: string, id: string) {
  await removeSubjectFromExam(id);

  revalidatePath(`/admin/examinations/${examId}/subjects`);

  return {
    success: true,
  };
}