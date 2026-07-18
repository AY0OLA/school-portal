import { prisma } from "@/lib/prisma";

export async function getExamClasses(examId: string) {
  return prisma.examClass.findMany({
    where: {
      examId,
    },
    include: {
      class: true,
    },
    orderBy: {
      class: {
        name: "asc",
      },
    },
  });
}

export async function assignClassToExam(examId: string, classId: string) {
  return prisma.examClass.create({
    data: {
      examId,
      classId,
    },
  });
}

export async function removeClassFromExam(id: string) {
  return prisma.examClass.delete({
    where: {
      id,
    },
  });
}
