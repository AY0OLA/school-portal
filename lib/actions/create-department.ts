"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

import {
  departmentSchema,
  DepartmentInput,
} from "@/lib/validations/department";

export async function createDepartment(values: DepartmentInput) {
  const validated = departmentSchema.parse(values);

  await prisma.department.create({
    data: validated,
  });

  revalidatePath("/admin/academics/departments");
}
