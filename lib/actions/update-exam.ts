"use server";

import { revalidatePath } from "next/cache";
import { updateExam } from "@/lib/services/exam.service";
import { examSchema } from "@/lib/validations/exam.schema";

export async function updateExamAction(id: string, data: unknown) {
  const validated = examSchema.parse(data);

  await updateExam(id, validated);

  revalidatePath("/admin/examinations");

  return {
    success: true,
    message: "Exam updated successfully.",
  };
}
