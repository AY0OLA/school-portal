"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

import { calculateGrade } from "@/lib/services/result.service";
import { ScoreEntryInput } from "@/lib/validations/score-entry.schema";

export async function saveExamScoresAction(data: ScoreEntryInput) {
  for (const row of data.scores) {
    const total = row.caScore + row.examScore;

    const grade = calculateGrade(total);

    await prisma.examScore.upsert({
      where: {
        examId_studentId_subjectId: {
          examId: data.examId,
          studentId: row.studentId,
          subjectId: data.subjectId,
        },
      },
      update: {
        caScore: row.caScore,
        examScore: row.examScore,
        totalScore: total,
        grade: grade.grade,
        remark: grade.remark,
      },
      create: {
        examId: data.examId,
        studentId: row.studentId,
        subjectId: data.subjectId,
        caScore: row.caScore,
        examScore: row.examScore,
        totalScore: total,
        grade: grade.grade,
        remark: grade.remark,
      },
    });
  }

  revalidatePath("/admin/examinations/score-entry");

  return {
    success: true,
  };
}
