"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function unpublishResultsAction(examId: string) {
  await prisma.exam.update({
    where: {
      id: examId,
    },
    data: {
      isPublished: false,
      status: "LOCKED",
    },
  });

  revalidatePath("/admin/examinations");

  return {
    success: true,
  };
}
