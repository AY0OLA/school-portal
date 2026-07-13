import { prisma } from "@/lib/prisma";

export async function getTerms() {
  return prisma.term.findMany({
    include: {
      session: true,
    },
    orderBy: [
      {
        isCurrent: "desc",
      },
      {
        startDate: "desc",
      },
    ],
  });
}

export async function getTermById(id: string) {
  return prisma.term.findUnique({
    where: {
      id,
    },
    include: {
      session: true,
    },
  });
}

export async function getSessionOptions() {
  return prisma.academicSession.findMany({
    orderBy: {
      startDate: "desc",
    },
    select: {
      id: true,
      name: true,
    },
  });
}
