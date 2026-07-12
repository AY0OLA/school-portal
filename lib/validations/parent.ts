import { z } from "zod";

export const parentSchema = z.object({
  // Personal Information
  firstName: z.string().min(2, "First name is required"),

  middleName: z.string().optional(),

  lastName: z.string().min(2, "Last name is required"),

  gender: z.enum(["MALE", "FEMALE"]).optional(),

  relationship: z.string().optional(),

  dob: z.string().optional(),

  // Contact
  phone: z.string().min(11, "Phone number is required"),

  alternatePhone: z.string().optional(),

  email: z.string().email("Invalid email").optional().or(z.literal("")),

  address: z.string().optional(),

  state: z.string().optional(),

  nationality: z.string().optional(),

  // Employment
  occupation: z.string().optional(),

  employer: z.string().optional(),

  // Media
  passport: z.string().optional(),

  // Relationships
  students: z.array(z.string()).optional(),
});

export type ParentFormData = z.infer<typeof parentSchema>;
