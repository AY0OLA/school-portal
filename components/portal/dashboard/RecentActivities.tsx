import { UserPlus, Wallet, ClipboardCheck, Bell } from "lucide-react";
import { recentActivities } from "@/lib/mock-data";


export default function RecentActivities() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">Recent Activities</h2>

      <div className="space-y-5">
        {recentActivities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div key={activity.title} className="flex items-start gap-4">
              <div className="rounded-lg bg-slate-100 p-3">
                <Icon className="h-5 w-5 text-primary" />
              </div>

              <div>
                <p className="font-medium">{activity.title}</p>

                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
