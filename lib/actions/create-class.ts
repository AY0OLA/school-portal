"use server";

import { revalidatePath } from "next/cache";

import { prisma } from "@/lib/prisma";

import { classSchema, ClassInput } from "@/lib/validations/class";

export async function createClass(values: ClassInput) {
  const validated = classSchema.parse(values);

  await prisma.class.create({
    data: validated,
  });

  revalidatePath("/admin/academics/classes");
}
