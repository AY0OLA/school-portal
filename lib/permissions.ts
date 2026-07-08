import { Role } from "@prisma/client";

export const permissions = {
  [Role.SUPER_ADMIN]: ["*"],

  [Role.ADMIN]: [
    "students",
    "teachers",
    "parents",
    "classes",
    "finance",
    "results",
    "attendance",
  ],

  [Role.TEACHER]: ["attendance", "results", "students"],

  [Role.ACCOUNTANT]: ["finance"],

  [Role.PARENT]: ["children"],

  [Role.STUDENT]: ["profile", "results", "fees"],

  [Role.LIBRARIAN]: ["library"],

  [Role.RECEPTIONIST]: ["admissions"],
};
