"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

import { subjectSchema, SubjectInput } from "@/lib/validations/subject";

export async function updateSubject(id: string, values: SubjectInput) {
  const validated = subjectSchema.parse(values);

  await prisma.subject.update({
    where: {
      id,
    },
    data: validated,
  });

  revalidatePath("/admin/academics/subjects");
}
