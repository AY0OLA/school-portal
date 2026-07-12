import { z } from "zod";

export const teacherSchema = z.object({
  // Employment
  employeeId: z.string().min(2, "Employee ID is required"),
  employmentDate: z.string().optional(),

  // Personal Information
  firstName: z.string().min(2, "First name is required"),
  middleName: z.string().optional(),
  lastName: z.string().min(2, "Last name is required"),

  gender: z.enum(["MALE", "FEMALE"]),

  dob: z.string().optional(),

  // Contact
  phone: z.string().min(11, "Phone number is invalid"),

  email: z.string().email("Invalid email").optional().or(z.literal("")),

  address: z.string().optional(),

  // Professional
  qualification: z.string().optional(),

  specialization: z.string().optional(),

  departmentId: z.string().optional(),

  // Media
  passport: z.string().optional(),

  // Status
  status: z.enum(["ACTIVE", "INACTIVE", "ON_LEAVE"]),

  // Relationships
  assignedSubjects: z.array(z.string()).optional(),

  assignedClasses: z.array(z.string()).optional(),
});

export type TeacherFormData = z.infer<typeof teacherSchema>;
