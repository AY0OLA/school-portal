"use server";

import { revalidatePath } from "next/cache";
import { deleteExam } from "@/lib/services/exam.service";

export async function deleteExamAction(id: string) {
  await deleteExam(id);

  revalidatePath("/admin/examinations");

  return {
    success: true,
    message: "Exam deleted successfully.",
  };
}
