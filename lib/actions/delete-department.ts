"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteDepartment(id: string) {
  await prisma.department.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/academics/departments");
}
