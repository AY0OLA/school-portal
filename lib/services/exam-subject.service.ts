import { prisma } from "@/lib/prisma";

export async function getExamSubjects(examId: string) {
  return prisma.examSubject.findMany({
    where: {
      examId,
    },
    include: {
      subject: true,
    },
    orderBy: {
      subject: {
        name: "asc",
      },
    },
  });
}

export async function assignSubjectToExam(examId: string, subjectId: string) {
  return prisma.examSubject.create({
    data: {
      examId,
      subjectId,
    },
  });
}

export async function removeSubjectFromExam(id: string) {
  return prisma.examSubject.delete({
    where: {
      id,
    },
  });
}
