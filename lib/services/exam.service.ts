import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function getExams() {
  return prisma.exam.findMany({
    include: {
      session: true,
      term: true,
    },
    orderBy: [
      {
        session: {
          name: "desc",
        },
      },
      {
        term: {
          name: "asc",
        },
      },
      {
        createdAt: "desc",
      },
    ],
  });
}

export async function getExamById(id: string) {
  return prisma.exam.findUnique({
    where: { id },
    include: {
      session: true,
      term: true,
      classes: {
        include: {
          class: true,
        },
      },
      subjects: {
        include: {
          subject: true,
        },
      },
    },
  });
}

export async function createExam(data: Prisma.ExamUncheckedCreateInput) {
  return prisma.exam.create({
    data,
  });
}

export async function updateExam(
  id: string,
  data: Prisma.ExamUncheckedUpdateInput,
) {
  return prisma.exam.update({
    where: { id },
    data,
  });
}

export async function deleteExam(id: string) {
  return prisma.exam.delete({
    where: { id },
  });
}

export async function publishExam(id: string) {
  return prisma.exam.update({
    where: { id },
    data: {
      status: "PUBLISHED",
      isPublished: true,
    },
  });
}

export async function lockExam(id: string) {
  return prisma.exam.update({
    where: { id },
    data: {
      status: "LOCKED",
    },
  });
}

export async function activateExam(id: string) {
  return prisma.exam.update({
    where: { id },
    data: {
      status: "ACTIVE",
    },
  });
}
