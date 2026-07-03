import type { ReactNode } from "react";

import Navbar from "@/components/website/navbar/index";

export default function WebsiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />

      <main>{children}</main>
    </>
  );
}
