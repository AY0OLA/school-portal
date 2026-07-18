"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function publishResultsAction(examId: string) {
  await prisma.exam.update({
    where: {
      id: examId,
    },
    data: {
      isPublished: true,
      status: "PUBLISHED",
    },
  });

  revalidatePath("/admin/examinations");

  return {
    success: true,
  };
}
