import { prisma } from "@/lib/prisma";

export async function loadStudentsForScoreEntry(
  classId: string,
  examId: string,
  subjectId: string,
) {
  const students = await prisma.student.findMany({
    where: {
      classId,
      status: "ACTIVE",
    },
    orderBy: [
      {
        lastName: "asc",
      },
      {
        firstName: "asc",
      },
    ],
    include: {
      examScores: {
        where: {
          examId,
          subjectId,
        },
      },
    },
  });

  return students;
}
