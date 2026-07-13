"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function removeEnrollment(id: string) {
  await prisma.enrollment.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/academics/enrollments");
}
