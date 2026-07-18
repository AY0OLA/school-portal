"use server";

import { revalidatePath } from "next/cache";
import { publishExam } from "@/lib/services/exam.service";

export async function publishExamAction(id: string) {
  await publishExam(id);

  revalidatePath("/admin/examinations");

  return {
    success: true,
    message: "Exam published successfully.",
  };
}
