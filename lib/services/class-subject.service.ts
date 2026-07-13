import { prisma } from "@/lib/prisma";

export async function getClassSubjectAssignments() {
  return prisma.classSubject.findMany({
    include: {
      class: {
        select: {
          id: true,
          name: true,
          arm: true,
        },
      },

      subject: {
        select: {
          id: true,
          name: true,
          code: true,
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getClassOptions() {
  return prisma.class.findMany({
    orderBy: [
      {
        name: "asc",
      },
      {
        arm: "asc",
      },
    ],

    select: {
      id: true,
      name: true,
      arm: true,
    },
  });
}

export async function getSubjectOptions() {
  return prisma.subject.findMany({
    orderBy: {
      name: "asc",
    },

    select: {
      id: true,
      name: true,
      code: true,
    },
  });
}
