import { z } from "zod";

export const classSubjectSchema = z.object({
  classId: z.string().min(1, "Class is required"),

  subjectId: z.string().min(1, "Subject is required"),
});

export type ClassSubjectInput = z.infer<typeof classSubjectSchema>;
