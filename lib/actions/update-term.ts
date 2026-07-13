"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

import { termSchema, TermInput } from "@/lib/validations/term";

export async function updateTerm(id: string, values: TermInput) {
  const validated = termSchema.parse(values);

  if (validated.isCurrent) {
    await prisma.term.updateMany({
      where: {
        sessionId: validated.sessionId,
      },
      data: {
        isCurrent: false,
      },
    });
  }

  await prisma.term.update({
    where: {
      id,
    },
    data: validated,
  });

  revalidatePath("/admin/academics/terms");
}
