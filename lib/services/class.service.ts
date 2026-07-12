import { prisma } from "@/lib/prisma";

export async function getClasses() {
  return prisma.class.findMany({
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
