import type { ReactNode } from "react";

export default function WebsiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header>Website Navbar</header>

      <main>{children}</main>

      <footer>Website Footer</footer>
    </>
  );
}
