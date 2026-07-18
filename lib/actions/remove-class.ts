"use server";

import { revalidatePath } from "next/cache";
import { removeClassFromExam } from "@/lib/services/exam-class.service";

export async function removeClassAction(examId: string, id: string) {
  await removeClassFromExam(id);

  revalidatePath(`/admin/examinations/${examId}/classes`);

  return {
    success: true,
  };
}
