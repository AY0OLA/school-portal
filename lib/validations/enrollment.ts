import { z } from "zod";

export const enrollmentSchema = z.object({
  studentId: z.string().min(1, "Student is required"),

  classId: z.string().min(1, "Class is required"),

  sessionId: z.string().min(1, "Academic session is required"),
});

export type EnrollmentInput = z.infer<typeof enrollmentSchema>;
