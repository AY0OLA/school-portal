"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import {
  academicSessionSchema,
  AcademicSessionInput,
} from "@/lib/validations/academic-session";

export async function updateAcademicSession(
  id: string,
  values: AcademicSessionInput,
) {
  const validated = academicSessionSchema.parse(values);

  if (validated.isCurrent) {
    await prisma.academicSession.updateMany({
      data: {
        isCurrent: false,
      },
    });
  }

  await prisma.academicSession.update({
    where: {
      id,
    },
    data: validated,
  });

  revalidatePath("/admin/academics/sessions");
}
