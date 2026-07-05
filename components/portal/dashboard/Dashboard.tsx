import DashboardHeader from "./DashboardHeader";
import StatsGrid from "./StatsGrid";
import QuickActions from "./QuickActions";
import RecentActivities from "./RecentActivities";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <DashboardHeader />

      <StatsGrid />
      <div className="grid gap-8 lg:grid-cols-2">
        <QuickActions />
        <RecentActivities />
      </div>
    </div>
  );
}
