"use server";

import { prisma } from "@/lib/prisma";
import {
  academicSessionSchema,
  AcademicSessionInput,
} from "@/lib/validations/academic-session";

import { revalidatePath } from "next/cache";

export async function createAcademicSession(values: AcademicSessionInput) {
  const validated = academicSessionSchema.parse(values);

  if (validated.isCurrent) {
    await prisma.academicSession.updateMany({
      data: {
        isCurrent: false,
      },
    });
  }

  await prisma.academicSession.create({
    data: validated,
  });

  revalidatePath("/admin/academics/sessions");
}
