"use client";

import { GraduationCap } from "lucide-react";
import SidebarSection from "./SidebarSection";
import { sidebarMenu } from "./menu";

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:flex-col w-72 h-screen border-r bg-white">
      <div className="border-b p-6">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-10 w-10 text-primary" />

          <div>
            <h2 className="font-heading text-xl font-bold">
              Greenfield Academy
            </h2>

            <p className="text-sm text-gray-500">School Portal</p>
          </div>
        </div>
      </div>

      <div className="sidebar-scroll flex-1 overflow-y-auto px-4 py-6">
        {sidebarMenu.map((section) => (
          <SidebarSection key={section.title} section={section} />
        ))}
      </div>
    </aside>
  );
}
