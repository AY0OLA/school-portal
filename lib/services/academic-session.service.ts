import { prisma } from "@/lib/prisma";

export async function getAcademicSessions({
  search = "",
  page = 1,
  pageSize = 10,
}: {
  search?: string;
  page?: number;
  pageSize?: number;
}) {
  const where = {
    name: {
      contains: search,
      mode: "insensitive" as const,
    },
  };

  const [sessions, total] = await Promise.all([
    prisma.academicSession.findMany({
      where,

      include: {
        _count: {
          select: {
            terms: true,
            enrollments: true,
          },
        },
      },

      orderBy: {
        startDate: "desc",
      },

      skip: (page - 1) * pageSize,

      take: pageSize,
    }),

    prisma.academicSession.count({
      where,
    }),
  ]);

  return {
    sessions,
    total,
    page,
    totalPages: Math.ceil(total / pageSize),
  };
}

export async function getAcademicSessionById(id: string) {
  return prisma.academicSession.findUnique({
    where: {
      id,
    },
    include: {
      terms: true,
      enrollments: true,
    },
  });
}
