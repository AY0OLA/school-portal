import { prisma } from "@/lib/prisma";

export async function getClasses() {
  return prisma.class.findMany({
    include: {
      classTeacher: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
        },
      },

      students: {
        select: {
          id: true,
        },
      },

      classSubjects: {
        select: {
          id: true,
        },
      },
    },

    orderBy: [
      {
        name: "asc",
      },
      {
        arm: "asc",
      },
    ],
  });
}

export async function getClassById(id: string) {
  return prisma.class.findUnique({
    where: {
      id,
    },
  });
}

export async function getClassTeacherOptions() {
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
