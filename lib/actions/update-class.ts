"use server";

import { revalidatePath } from "next/cache";

import { prisma } from "@/lib/prisma";

import { classSchema, ClassInput } from "@/lib/validations/class";

export async function updateClass(id: string, values: ClassInput) {
  const validated = classSchema.parse(values);

  await prisma.class.update({
    where: {
      id,
    },

    data: validated,
  });

  revalidatePath("/admin/academics/classes");
}
