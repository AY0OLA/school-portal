import { prisma } from "@/lib/prisma";

export async function getEnrollments() {
  return prisma.enrollment.findMany({
    include: {
      student: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          admissionNumber: true,
        },
      },

      class: {
        select: {
          id: true,
          name: true,
          arm: true,
        },
      },

      session: {
        select: {
          id: true,
          name: true,
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getStudentOptions() {
  return prisma.student.findMany({
    orderBy: [
      {
        firstName: "asc",
      },
      {
        lastName: "asc",
      },
    ],

    select: {
      id: true,
      firstName: true,
      lastName: true,
      admissionNumber: true,
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

export async function getSessionOptions() {
  return prisma.academicSession.findMany({
    orderBy: {
      name: "desc",
    },

    select: {
      id: true,
      name: true,
    },
  });
}
