import { prisma } from "@/lib/prisma";

export async function getStudents() {
  return prisma.student.findMany({
    include: {
      class: true,
      parent: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getStudentById(id: string) {
  return prisma.student.findUnique({
    where: {
      id,
    },
    include: {
      class: true,
      parent: true,
      enrollments: {
        include: {
          session: true,
        },
      },
    },
  });
}
