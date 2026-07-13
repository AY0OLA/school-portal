import { z } from "zod";

export const termSchema = z
  .object({
    name: z.string().min(2, "Term name is required"),

    sessionId: z.string().min(1, "Academic session is required"),

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

export type TermFormValues = z.input<typeof termSchema>;

export type TermInput = z.output<typeof termSchema>;
