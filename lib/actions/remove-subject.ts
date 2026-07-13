"use server";

import { prisma } from "@/lib/prisma";

import { revalidatePath } from "next/cache";

export async function removeSubject(id: string) {
  await prisma.teacherSubject.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/academics/teacher-subjects");
}
