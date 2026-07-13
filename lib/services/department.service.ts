import { prisma } from "@/lib/prisma";

export async function getDepartments() {
  return prisma.department.findMany({
    include: {
      teachers: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
        },
      },
    },
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

export async function getTeacherOptions() {
  return prisma.teacher.findMany({
    orderBy: {
      firstName: "asc",
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
    },
  });
}
