import type { ReactNode } from "react";

export default function PortalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside>Sidebar</aside>

      <main className="flex-1">{children}</main>
    </div>
  );
}
