import { auth } from "@/auth";
import { redirect } from "next/navigation";
import type { Role } from "@prisma/client";

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

export async function requireRole(roles: Role[]) {
  const user = await requireAuth();

  if (!roles.includes(user.role)) {
    redirect("/unauthorized");
  }

  return user;
}
