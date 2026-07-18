"use server";

import { revalidatePath } from "next/cache";
import { createExam } from "@/lib/services/exam.service";
import { examSchema } from "@/lib/validations/exam.schema";

export async function createExamAction(data: unknown) {
  const validated = examSchema.parse(data);

  await createExam(validated);

  revalidatePath("/admin/examinations");

  return {
    success: true,
    message: "Exam created successfully.",
  };
}
