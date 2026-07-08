import { z } from "zod";

export const teacherSchema = z.object({
  employeeId: z.string().min(2, "Employee ID is required"),

  firstName: z.string().min(2, "First name is required"),

  lastName: z.string().min(2, "Last name is required"),

  email: z.string().email("Invalid email").optional().or(z.literal("")),

  phone: z.string().min(11, "Phone number is invalid"),

  gender: z.enum(["MALE", "FEMALE"]),

  status: z.enum(["ACTIVE", "INACTIVE", "ON_LEAVE"]),
});

export type TeacherFormData = z.infer<typeof teacherSchema>;
