import { z } from "zod";

export const attendanceSchema = z.object({
  studentId: z.string().min(1, "Student is required"),

  classId: z.string().min(1, "Class is required"),

  sessionId: z.string().min(1, "Session is required"),

  date: z.date(),

  status: z.enum(["PRESENT", "ABSENT", "LATE", "EXCUSED"]),

  remarks: z.string().optional(),
});

export type AttendanceInput = z.infer<typeof attendanceSchema>;
