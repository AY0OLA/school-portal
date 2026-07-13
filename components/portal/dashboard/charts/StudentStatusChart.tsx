"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

import DashboardChart from "./DashboardChart";

const COLORS = ["#2563EB", "#16A34A", "#F59E0B", "#EF4444", "#8B5CF6"];

type Props = {
  data: {
    name: string;
    value: number;
  }[];
};

export default function StudentStatusChart({ data }: Props) {
  if (!data.length) {
    return (
      <DashboardChart title="Students by Gender">
        <div className="flex h-full items-center justify-center text-slate-500">
          No data available
        </div>
      </DashboardChart>
    );
  }
  return (
    <DashboardChart
      title="Student Status"
      subtitle="Current student enrollment status"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={95}
            innerRadius={55}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </DashboardChart>
  );
}
