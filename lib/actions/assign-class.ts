"use server";

import { revalidatePath } from "next/cache";
import { assignClassToExam } from "@/lib/services/exam-class.service";

export async function assignClassAction(examId: string, classId: string) {
  await assignClassToExam(examId, classId);

  revalidatePath(`/admin/examinations/${examId}/classes`);

  return {
    success: true,
  };
}
