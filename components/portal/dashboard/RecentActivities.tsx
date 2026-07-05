import { UserPlus, Wallet, ClipboardCheck, Bell } from "lucide-react";

const activities = [
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

export default function RecentActivities() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">Recent Activities</h2>

      <div className="space-y-5">
        {activities.map((activity) => {
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
