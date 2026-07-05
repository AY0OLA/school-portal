import {
  GraduationCap,
  Users,
  Wallet,
  ClipboardCheck,
  UserPlus,
  FileText,
  Megaphone,
  Bell,
} from "lucide-react";

export const dashboardStats = [
  {
    title: "Students",
    value: "1,248",
    icon: GraduationCap,
    color: "bg-blue-600",
  },
  {
    title: "Teachers",
    value: "84",
    icon: Users,
    color: "bg-green-600",
  },
  {
    title: "Fee Payments",
    value: "₦12.5M",
    icon: Wallet,
    color: "bg-orange-500",
  },
  {
    title: "Attendance",
    value: "96%",
    icon: ClipboardCheck,
    color: "bg-purple-600",
  },
];

export const quickActions = [
  {
    title: "Add Student",
    href: "/admin/students/new",
    icon: UserPlus,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Take Attendance",
    href: "/admin/attendance",
    icon: ClipboardCheck,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Publish Results",
    href: "/admin/results",
    icon: FileText,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Announcement",
    href: "/admin/announcements/new",
    icon: Megaphone,
    color: "bg-orange-100 text-orange-600",
  },
];

export const recentActivities = [
  {
    title: "New student registered",
    time: "10 mins ago",
    icon: UserPlus,
  },
  {
    title: "Fee payment received",
    time: "30 mins ago",
    icon: Wallet,
  },
  {
    title: "Attendance submitted",
    time: "1 hour ago",
    icon: ClipboardCheck,
  },
  {
    title: "Announcement published",
    time: "Today",
    icon: Bell,
  },
];

export const monthlyEnrollment = [
  { month: "Jan", students: 120 },
  { month: "Feb", students: 180 },
  { month: "Mar", students: 240 },
  { month: "Apr", students: 300 },
  { month: "May", students: 340 },
  { month: "Jun", students: 390 },
];

export const feeCollection = [
  { month: "Jan", amount: 2.2 },
  { month: "Feb", amount: 3.1 },
  { month: "Mar", amount: 2.8 },
  { month: "Apr", amount: 4.3 },
  { month: "May", amount: 5.1 },
  { month: "Jun", amount: 4.6 },
];
