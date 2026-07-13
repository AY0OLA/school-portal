"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function removeClassSubject(id: string) {
  await prisma.classSubject.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/academics/class-subjects");
}
