import { z } from "zod";

export const classSchema = z.object({
  name: z.string().min(1, "Class name is required"),

  arm: z.string().min(1, "Class arm is required"),

  capacity: z.number().min(1, "Capacity must be at least 1").optional(),

  room: z.string().optional(),

  description: z.string().optional(),

  classTeacherId: z.string().optional(),
});

export type ClassInput = z.infer<typeof classSchema>;
