import { prisma } from "@/lib/prisma";

export async function generateReportCard(
  examId: string,
  studentId: string
) {
  return prisma.result.findUnique({
    where: {
      examId_studentId: {
        examId,
        studentId,
      },
    },

    include: {
      student: {
        include: {
          class: true,
        },
      },

      exam: {
        include: {
          term: true,
          session: true,
        },
      },

      subjects: {
        include: {
          subject: true,
        },

        orderBy: {
          subject: {
            name: "asc",
          },
        },
      },
    },
  });
}
