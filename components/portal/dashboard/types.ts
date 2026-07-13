import { LucideIcon } from "lucide-react";

export interface DashboardStat {
  title: string;
  value: number | string;
  Icon: LucideIcon;
  color: string;
}

export interface QuickAction {
  title: string;
  href: string;
  Icon: LucideIcon;
  color: string;
}

export interface RecentActivity {
  title: string;
  time: string;
  Icon: LucideIcon;
}

export interface EnrollmentData {
  month: string;
  students: number;
}

export interface RevenueData {
  month: string;
  revenue: number;
}
