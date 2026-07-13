import { z } from "zod";

export const teacherSubjectSchema = z.object({
  teacherId: z.string().min(1, "Teacher is required"),

  subjectId: z.string().min(1, "Subject is required"),
});

export type TeacherSubjectInput = z.infer<typeof teacherSubjectSchema>;
