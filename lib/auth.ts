import { auth } from "@/auth";
import { redirect } from "next/navigation";

export async function currentUser() {
  const session = await auth();

  return session?.user ?? null;
}

export async function requireAuth() {
  const user = await currentUser();

  if (!user) {
    redirect("/login");
  }

  return user;
}

export async function requireRole(
  roles: Array<
    "SUPER_ADMIN" | "ADMIN" | "TEACHER" | "STUDENT" | "PARENT" | "ACCOUNTANT"
  >,
) {
  const user = await requireAuth();

  if (!roles.includes(user.role as any)) {
    redirect("/unauthorized");
  }

  return user;
}
