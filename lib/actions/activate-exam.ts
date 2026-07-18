"use server";

import { revalidatePath } from "next/cache";
import { activateExam } from "@/lib/services/exam.service";

export async function activateExamAction(id: string) {
  await activateExam(id);

  revalidatePath("/admin/examinations");

  return {
    success: true,
    message: "Exam activated successfully.",
  };
}
