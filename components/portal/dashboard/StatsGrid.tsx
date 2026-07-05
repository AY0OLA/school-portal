import { GraduationCap, Users, Wallet, ClipboardCheck } from "lucide-react";

import StatCard from "./StatCard";

export default function StatsGrid() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Students"
        value="1,248"
        icon={GraduationCap}
        color="bg-blue-600"
      />

      <StatCard title="Teachers" value="84" icon={Users} color="bg-green-600" />

      <StatCard
        title="Fee Payments"
        value="₦12.5M"
        icon={Wallet}
        color="bg-orange-500"
      />

      <StatCard
        title="Attendance"
        value="96%"
        icon={ClipboardCheck}
        color="bg-purple-600"
      />
    </section>
  );
}
