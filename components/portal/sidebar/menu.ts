import {
  LayoutDashboard,
  GraduationCap,
  Users,
  BookOpen,
  ClipboardCheck,
  Wallet,
  Megaphone,
  Settings,
  LogOut,
  School,
} from "lucide-react";

export const sidebarMenu = [
  {
    title: "MAIN",
    items: [
      {
        label: "Dashboard",
        href: "/admin",
        icon: LayoutDashboard,
      },
    ],
  },

  {
    title: "USERS",
    items: [
      {
        label: "Students",
        href: "/admin/students",
        icon: GraduationCap,
      },
      {
        label: "Teachers",
        href: "/admin/teachers",
        icon: Users,
      },
      {
        label: "Parents",
        href: "/admin/parents",
        icon: Users,
      },
    ],
  },

  {
    title: "ACADEMICS",
    items: [
      {
        label: "Classes",
        href: "/admin/academics/classes",
        icon: School,
      },
      {
        label: "Subjects",
        href: "/admin/academics/subjects",
        icon: BookOpen,
      },
      {
        label: "Attendance",
        href: "/admin/attendance",
        icon: ClipboardCheck,
      },
      {
        label: "Results",
        href: "/admin/results",
        icon: ClipboardCheck,
      },
      {
        label: "Teacher Assignments",
        href: "/admin/academics/teacher-subjects",
        icon: BookOpen,
      },
      {
        label: "Class Subjects",
        href: "/admin/academics/class-subjects",
        icon: BookOpen,
      },
    ],
  },

  {
    title: "FINANCE",
    items: [
      {
        label: "Fees",
        href: "/admin/fees",
        icon: Wallet,
      },
    ],
  },

  {
    title: "COMMUNICATION",
    items: [
      {
        label: "Announcements",
        href: "/admin/announcements",
        icon: Megaphone,
      },
    ],
  },

  {
    title: "SYSTEM",
    items: [
      {
        label: "Settings",
        href: "/admin/settings",
        icon: Settings,
      },
      {
        label: "Logout",
        href: "/logout",
        icon: LogOut,
      },
    ],
  },
];