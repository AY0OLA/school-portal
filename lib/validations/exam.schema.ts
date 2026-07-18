import { z } from "zod";

export const examSchema = z.object({
  name: z.string().min(1, "Exam name is required"),

  sessionId: z.string().min(1, "Academic session is required"),

  termId: z.string().min(1, "Term is required"),

  totalMark: z.coerce
    .number()
    .min(1, "Total mark must be at least 1")
    .max(1000, "Total mark is too large"),

  startDate: z.date().optional(),

  endDate: z.date().optional(),

  description: z.string().optional(),

  isPublished: z.boolean().default(false),
});

export type ExamInput = z.infer<typeof examSchema>;
