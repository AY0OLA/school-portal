export { auth as proxy } from "@/auth";

export const config = {
  matcher: [
    "/admin/:path*",
    "/teacher/:path*",
    "/student/:path*",
    "/parent/:path*",
    "/accountant/:path*",
  ],
};
