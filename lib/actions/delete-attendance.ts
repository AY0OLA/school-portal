"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteAttendance(id: string) {
  await prisma.attendance.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/attendance");
}
