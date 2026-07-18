"use server";

import { revalidatePath } from "next/cache";
import { lockExam } from "@/lib/services/exam.service";

export async function lockExamAction(id: string) {
  await lockExam(id);

  revalidatePath("/admin/examinations");

  return {
    success: true,
    message: "Exam locked successfully.",
  };
}
