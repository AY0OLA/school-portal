import { prisma } from "@/lib/prisma";

export async function getTeachers() {
  return prisma.teacher.findMany({
    orderBy: {
      createdAt: "desc",
    },

    include: {
      department: true,

      teacherSubjects: {
        include: {
          subject: true,
        },
      },

      classTeacherOf: true,
    },
  });
}

export async function getTeacherById(id: string) {
  return prisma.teacher.findUnique({
    where: {
      id,
    },

    include: {
      department: true,

      teacherSubjects: {
        include: {
          subject: true,
        },
      },

      classTeacherOf: true,
    },
  });
}
