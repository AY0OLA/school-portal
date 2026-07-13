"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteAcademicSession(id: string) {
  await prisma.academicSession.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/academics/sessions");
}
