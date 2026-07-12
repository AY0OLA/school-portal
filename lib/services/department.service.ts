import { prisma } from "@/lib/prisma";

export async function getDepartments() {
  return prisma.department.findMany({
    orderBy: {
      name: "asc",
    },
  });
}

export async function getDepartmentById(id: string) {
  return prisma.department.findUnique({
    where: {
      id,
    },
  });
}
