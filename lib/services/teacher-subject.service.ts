import { prisma } from "@/lib/prisma";

export async function getTeacherSubjectAssignments() {
  return prisma.teacherSubject.findMany({
    include: {
      teacher: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
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
