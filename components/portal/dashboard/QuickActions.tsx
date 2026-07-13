import Link from "next/link";
import {
  UserPlus,
  GraduationCap,
  BookOpen,
  Building2,
  Users,
  CreditCard,
  Bell,
  ClipboardList,
} from "lucide-react";

const actions = [
  {
    title: "Add Student",
    href: "/admin/students/new",
    icon: UserPlus,
    color: "bg-blue-500",
  },
  {
    title: "Add Teacher",
    href: "/admin/teachers/new",
    icon: GraduationCap,
    color: "bg-emerald-500",
  },
  {
    title: "Manage Classes",
    href: "/admin/classes",
    icon: Building2,
    color: "bg-orange-500",
  },
  {
    title: "Manage Subjects",
    href: "/admin/subjects",
    icon: BookOpen,
    color: "bg-purple-500",
  },
  {
    title: "Parents",
    href: "/admin/parents",
    icon: Users,
    color: "bg-pink-500",
  },
  {
    title: "Finance",
    href: "/admin/finance",
    icon: CreditCard,
    color: "bg-green-500",
  },
  {
    title: "Attendance",
    href: "/admin/attendance",
    icon: ClipboardList,
    color: "bg-cyan-500",
  },
  {
    title: "Announcements",
    href: "/admin/announcements",
    icon: Bell,
    color: "bg-amber-500",
  },
];

export default function QuickActions() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">Quick Actions</h2>

        <p className="mt-1 text-sm text-slate-500">Frequently used shortcuts</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-md"
            >
              <div
                className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${action.color}`}
              >
                <Icon className="h-6 w-6 text-white" />
              </div>

              <span className="text-sm font-medium text-slate-700 text-center">
                {action.title}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
