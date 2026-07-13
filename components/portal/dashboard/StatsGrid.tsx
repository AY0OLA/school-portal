import {
  BookOpen,
  Building2,
  GraduationCap,
  School,
  Users,
  UserSquare2,
  CalendarRange,
  CalendarDays,
} from "lucide-react";

import StatCard from "./StatCard";

type StatsGridProps = {
  stats: {
    totalStudents: number;
    totalTeachers: number;
    totalParents: number;
    totalClasses: number;
    totalSubjects: number;
    totalDepartments: number;
    currentSession: string;
    currentTerm: string;
  };
};

export default function StatsGrid({ stats }: StatsGridProps) {
  const dashboardStats = [
    {
      title: "Students",
      value: stats.totalStudents,
      Icon: GraduationCap,
      color: "bg-blue-600",
    },
    {
      title: "Teachers",
      value: stats.totalTeachers,
      Icon: Users,
      color: "bg-emerald-600",
    },
    {
      title: "Parents",
      value: stats.totalParents,
      Icon: UserSquare2,
      color: "bg-violet-600",
    },
    {
      title: "Classes",
      value: stats.totalClasses,
      Icon: School,
      color: "bg-orange-600",
    },
    {
      title: "Subjects",
      value: stats.totalSubjects,
      Icon: BookOpen,
      color: "bg-cyan-600",
    },
    {
      title: "Departments",
      value: stats.totalDepartments,
      Icon: Building2,
      color: "bg-rose-600",
    },
    {
      title: "Academic Session",
      value: stats.currentSession,
      Icon: CalendarRange,
      color: "bg-indigo-600",
    },
    {
      title: "Current Term",
      value: stats.currentTerm,
      Icon: CalendarDays,
      color: "bg-teal-600",
    },
  ];

  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {dashboardStats.map((item) => (
        <StatCard
          key={item.title}
          title={item.title}
          value={item.value}
          Icon={item.Icon}
          color={item.color}
        />
      ))}
    </section>
  );
}
