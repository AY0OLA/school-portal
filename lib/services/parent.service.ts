import { prisma } from "@/lib/prisma";

export async function getParents() {
  return prisma.parent.findMany({
    orderBy: {
      createdAt: "desc",
    },

    include: {
      students: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          admissionNumber: true,
          class: {
            select: {
              name: true,
              arm: true,
            },
          },
        },
      },
    },
  });
}

export async function getParentById(id: string) {
  return prisma.parent.findUnique({
    where: {
      id,
    },

    include: {
      students: {
        include: {
          class: true,
        },
      },
    },
  });
}

export async function getUnassignedStudents() {
  return prisma.student.findMany({
    where: {
      parentId: null,
    },

    orderBy: {
      firstName: "asc",
    },

    select: {
      id: true,
      firstName: true,
      lastName: true,
      admissionNumber: true,
    },
  });
}
