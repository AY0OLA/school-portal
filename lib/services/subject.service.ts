import { prisma } from "@/lib/prisma";

export async function getSubjects() {
  return prisma.subject.findMany({
    include: {
      teacherSubjects: {
        include: {
          teacher: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
            },
          },
        },
      },

      classSubjects: {
        include: {
          class: {
            select: {
              id: true,
              name: true,
              arm: true,
            },
          },
        },
      },
    },

    orderBy: {
      name: "asc",
    },
  });
}

export async function getSubjectById(id: string) {
  return prisma.subject.findUnique({
    where: {
      id,
    },
  });
}
