import { z } from "zod";

export const studentSchema = z.object({
  firstName: z.string().min(2, "First name is required"),

  middleName: z.string().optional(),

  lastName: z.string().min(2, "Last name is required"),

  gender: z.string().min(1, "Select gender"),

  dob: z.string(),

  state: z.string(),

  nationality: z.string(),

  religion: z.string(),

  address: z.string().min(5, "Address is required"),

  admissionNumber: z.string().min(2),

  admissionDate: z.string(),

  class: z.string(),

  arm: z.string(),

  session: z.string(),

  status: z.string(),

  fatherName: z.string(),

  motherName: z.string(),

  guardianName: z.string(),

  phone: z.string().min(11, "Phone number is invalid"),

  email: z.string().email("Invalid email").optional().or(z.literal("")),

  occupation: z.string(),

  guardianAddress: z.string(),

  bloodGroup: z.string(),

  genotype: z.string(),

  allergies: z.string(),

  medicalCondition: z.string(),

  emergencyContact: z.string(),

  medicalNotes: z.string(),
});

export type StudentFormData = z.infer<typeof studentSchema>;
