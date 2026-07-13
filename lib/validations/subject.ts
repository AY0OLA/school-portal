import { z } from "zod";

export const subjectSchema = z.object({
  name: z.string().min(2, "Subject name is required"),

  code: z
    .string()
    .min(2, "Subject code is required")
    .transform((value) => value.toUpperCase()),

  description: z.string().optional(),
});

export type SubjectInput = z.infer<typeof subjectSchema>;
