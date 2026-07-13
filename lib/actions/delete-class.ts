"use server";

import { prisma } from "@/lib/prisma";

import { revalidatePath } from "next/cache";

export async function deleteClass(id: string) {
  await prisma.class.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/academics/classes");
}
