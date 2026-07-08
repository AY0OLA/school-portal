import Link from "next/link";
import { UserPlus, ClipboardCheck, FileText, Megaphone } from "lucide-react";
import { quickActions } from "@/lib/mock-data";



export default function QuickActions() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">Quick Actions</h2>

      <div className="grid grid-cols-2 gap-4">
        {quickActions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="group rounded-xl border p-5 transition hover:border-primary hover:shadow-md"
            >
              <div
                className={`mb-4 inline-flex rounded-lg p-3 ${action.color}`}
              >
                <Icon className="h-6 w-6" />
              </div>

              <p className="font-medium group-hover:text-primary">
                {action.title}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
