import { GraduationCap, Users, UserSquare2 } from "lucide-react";
import type { DashboardActivity } from "@/lib/services/dashboard.service";

type Activity = {
  id: string;
  type: "Student" | "Teacher" | "Parent";
  title: string;
  description: string;
  createdAt: Date;
};

type RecentActivitiesProps = {
  activities: DashboardActivity[];
};

export default function RecentActivities({
  activities,
}: RecentActivitiesProps) {
  const getIcon = (type: Activity["type"]) => {
    switch (type) {
      case "Student":
        return GraduationCap;

      case "Teacher":
        return Users;

      case "Parent":
        return UserSquare2;

      default:
        return GraduationCap;
    }
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">
          Recent Activities
        </h2>

        <span className="text-sm text-slate-500">
          {activities.length} Activities
        </span>
      </div>

      <div className="space-y-5">
        {activities.length === 0 ? (
          <div className="py-10 text-center text-slate-500">
            <div className="flex h-52 flex-col items-center justify-center text-center">
              <div className="mb-4 rounded-full bg-slate-100 p-4">📋</div>

              <h3 className="font-semibold">No Activities Yet</h3>

              <p className="mt-2 text-sm text-slate-500">
                New admissions, teachers and parents will appear here.
              </p>
            </div>
          </div>
        ) : (
          activities.map((activity) => {
            const Icon = getIcon(activity.type);

            return (
              <div
                key={activity.id}
                className="flex items-start gap-4 rounded-xl transition-colors hover:bg-slate-50 p-3"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>

                <div className="flex-1">
                  <h3 className="font-medium text-slate-900">
                    {activity.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {activity.description}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {activity.createdAt.toLocaleDateString()}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
