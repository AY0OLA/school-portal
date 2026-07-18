import { z } from "zod";

export const scoreRowSchema = z.object({
  studentId: z.string().min(1),
  caScore: z.coerce.number().min(0).max(40),
  examScore: z.coerce.number().min(0).max(60),
});

export const scoreEntrySchema = z.object({
  examId: z.string().min(1),
  subjectId: z.string().min(1),
  classId: z.string().min(1),
  scores: z.array(scoreRowSchema),
});

export type ScoreEntryInput = z.infer<typeof scoreEntrySchema>;
export type ScoreRowInput = z.infer<typeof scoreRowSchema>;
