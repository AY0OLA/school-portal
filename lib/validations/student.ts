import { z } from "zod";

export const studentSchema = z.object({

  firstName: z.string().min(2, "First name is required"),

  middleName: z.string().optional(),

  lastName: z.string().min(2, "Last name is required"),

  gender: z.enum(["MALE", "FEMALE"]),

  dob: z.string().min(1, "Date of birth is required"),

  state: z.string().optional(),

  nationality: z.string().optional(),

  religion: z.string().optional(),

  address: z.string().min(5, "Address is required"),



  admissionNumber: z.string().min(2, "Admission Number is required"),

  admissionDate: z.string().min(1, "Admission Date is required"),

  class: z.string().min(1, "Select a class"),

  arm: z.string().optional(),

  session: z.string().optional(),

  status: z.enum([
    "ACTIVE",
    "PENDING",
    "SUSPENDED",
    "GRADUATED",
    "TRANSFERRED",
  ]),


  fatherName: z.string().optional(),

  motherName: z.string().optional(),

  guardianName: z.string().optional(),

  phone: z.string().min(11, "Phone number is invalid"),

  email: z.string().email("Invalid email").optional().or(z.literal("")),

  occupation: z.string().optional(),

  guardianAddress: z.string().optional(),


  bloodGroup: z.string().optional(),

  genotype: z.string().optional(),

  allergies: z.string().optional(),

  medicalCondition: z.string().optional(),

  emergencyContact: z.string().optional(),

  medicalNotes: z.string().optional(),
});

export type StudentFormData = z.infer<typeof studentSchema>;
