"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";
import clsx from "clsx";

type Props = {
  href: string;
  icon: LucideIcon;
  label: string;
};

export default function SidebarItem({ href, icon: Icon, label }: Props) {
  const pathname = usePathname();

  const active = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
        active
          ? "bg-primary text-white shadow"
          : "text-gray-600 hover:bg-slate-100 hover:text-primary",
      )}
    >
      <Icon size={20} />

      <span>{label}</span>
    </Link>
  );
}
