import { prisma } from "@/lib/prisma";

export async function getSubjects() {
  return prisma.subject.findMany({
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
