import { prisma } from "@/lib/prisma";

export async function generateBroadsheet(examId: string, classId: string) {
  const students = await prisma.student.findMany({
    where: {
      classId,
      status: "ACTIVE",
    },
    orderBy: [{ lastName: "asc" }, { firstName: "asc" }],
    include: {
      examScores: {
        where: {
          examId,
        },
        include: {
          subject: true,
        },
      },
    },
  });

  return students;
}
