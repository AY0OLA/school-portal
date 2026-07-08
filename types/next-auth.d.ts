import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role:
        | "SUPER_ADMIN"
        | "ADMIN"
        | "TEACHER"
        | "STUDENT"
        | "PARENT"
        | "ACCOUNTANT"
        | "LIBRARIAN"
        | "RECEPTIONIST";
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role:
      | "SUPER_ADMIN"
      | "ADMIN"
      | "TEACHER"
      | "STUDENT"
      | "PARENT"
      | "ACCOUNTANT"
      | "LIBRARIAN"
      | "RECEPTIONIST";
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    id?: string;
    role:
      | "SUPER_ADMIN"
      | "ADMIN"
      | "TEACHER"
      | "STUDENT"
      | "PARENT"
      | "ACCOUNTANT"
      | "LIBRARIAN"
      | "RECEPTIONIST";
  }
}
