import DashboardHeader from "./DashboardHeader";
import StatsGrid from "./StatsGrid";
import Charts from "./charts";
import QuickActions from "./QuickActions";
import RecentActivities from "./RecentActivities";

import { getDashboardData } from "@/lib/services/dashboard.service";

export default async function Dashboard() {
  const { stats, activities, genderChart, classChart } =
    await getDashboardData();
  return (
    <main className="space-y-8">
      <DashboardHeader />

      <StatsGrid stats={stats} />

      <Charts genderData={genderChart} classData={classChart} />

      <section className="grid gap-8 xl:grid-cols-2">
        <QuickActions />

        <RecentActivities activities={activities} />
      </section>
    </main>
  );
}
