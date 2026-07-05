"use client";

import Link from "next/link";
import { GraduationCap } from "lucide-react";

const menuItems = [
  { label: "Dashboard", href: "/admin" },
  { label: "Students", href: "/admin/students" },
  { label: "Teachers", href: "/admin/teachers" },
  { label: "Parents", href: "/admin/parents" },
  { label: "Classes", href: "/admin/classes" },
  { label: "Subjects", href: "/admin/subjects" },
  { label: "Attendance", href: "/admin/attendance" },
  { label: "Results", href: "/admin/results" },
  { label: "Fees", href: "/admin/fees" },
  { label: "Announcements", href: "/admin/announcements" },
  { label: "Settings", href: "/admin/settings" },
];

export default function Sidebar() {
  return (
    <aside className="hidden w-72 border-r bg-white lg:flex lg:flex-col">
      <div className="flex items-center gap-3 border-b p-6">
        <GraduationCap className="h-9 w-9 text-primary" />

        <div>
          <h2 className="font-heading text-xl font-bold">Greenfield Academy</h2>

          <p className="text-sm text-gray-500">School Portal</p>
        </div>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="block rounded-lg px-4 py-3 transition hover:bg-primary hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
