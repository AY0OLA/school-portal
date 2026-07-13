import { prisma } from "@/lib/prisma";

export async function getAttendanceRecords() {
  return prisma.attendance.findMany({
    include: {
      student: {
        select: {
          id: true,
          admissionNumber: true,
          firstName: true,
          lastName: true,
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

    orderBy: [
      {
        date: "desc",
      },
      {
        createdAt: "desc",
      },
    ],
  });
}
export async function getAttendanceForClass(
  classId: string,
  sessionId: string,
  date: Date,
) {
  return prisma.attendance.findMany({
    where: {
      classId,
      sessionId,
      date,
    },

    include: {
      student: {
        select: {
          id: true,
          admissionNumber: true,
          firstName: true,
          lastName: true,
        },
      },
    },

    orderBy: {
      student: {
        firstName: "asc",
      },
    },
  });
}
export async function getAttendanceStatistics() {
  const [total, present, absent, late, excused] = await Promise.all([
    prisma.attendance.count(),

    prisma.attendance.count({
      where: {
        status: "PRESENT",
      },
    }),

    prisma.attendance.count({
      where: {
        status: "ABSENT",
      },
    }),

    prisma.attendance.count({
      where: {
        status: "LATE",
      },
    }),

    prisma.attendance.count({
      where: {
        status: "EXCUSED",
      },
    }),
  ]);

  return {
    total,
    present,
    absent,
    late,
    excused,
  };
}
export async function getAttendanceHistory() {
  return prisma.attendance.findMany({
    include: {
      student: {
        select: {
          id: true,
          admissionNumber: true,
          firstName: true,
          lastName: true,
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

    orderBy: [
      {
        date: "desc",
      },
      {
        student: {
          firstName: "asc",
        },
      },
    ],
  });
}
export async function getAttendanceFormData() {
  const [classes, sessions] = await Promise.all([
    prisma.class.findMany({
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
    }),

    prisma.academicSession.findMany({
      orderBy: {
        name: "desc",
      },

      select: {
        id: true,
        name: true,
      },
    }),
  ]);

  return {
    classes,
    sessions,
  };
}

export async function getEnrolledStudents(classId: string, sessionId: string) {
  return prisma.enrollment.findMany({
    where: {
      classId,
      sessionId,
    },

    include: {
      student: {
        select: {
          id: true,
          admissionNumber: true,
          firstName: true,
          lastName: true,
        },
      },
    },

    orderBy: {
      student: {
        firstName: "asc",
      },
    },
  });
}

export async function getAttendancePageData() {
  const [classes, sessions] = await Promise.all([
    prisma.class.findMany({
      orderBy: [{ name: "asc" }, { arm: "asc" }],

      select: {
        id: true,
        name: true,
        arm: true,
      },
    }),

    prisma.academicSession.findMany({
      orderBy: {
        name: "desc",
      },

      select: {
        id: true,
        name: true,
      },
    }),
  ]);

  return {
    classes,
    sessions,
  };
}