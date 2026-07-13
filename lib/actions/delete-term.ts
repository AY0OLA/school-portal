"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteTerm(id: string) {
  await prisma.term.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/academics/terms");
}
