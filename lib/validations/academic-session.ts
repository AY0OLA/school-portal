import { z } from "zod";

export const academicSessionSchema = z
  .object({
    name: z.string().min(2, "Session name is required"),

    startDate: z.coerce.date().optional(),

    endDate: z.coerce.date().optional(),

    isCurrent: z.boolean(),
  })
  .refine(
    (data) => {
      if (!data.startDate || !data.endDate) return true;

      return data.endDate > data.startDate;
    },
    {
      path: ["endDate"],
      message: "End date must be after start date.",
    },
  );

export type AcademicSessionFormValues = z.input<typeof academicSessionSchema>;

export type AcademicSessionInput = z.output<typeof academicSessionSchema>;
