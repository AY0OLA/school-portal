"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import DashboardChart from "./DashboardChart";

type GenderChartProps = {
  data: {
    name: string;
    value: number;
  }[];
};

const COLORS = ["#2563EB", "#EC4899"];

export default function GenderChart({ data }: GenderChartProps) {
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
      title="Students by Gender"
      subtitle="Distribution of students by gender"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={95}
            innerRadius={55}
            paddingAngle={3}
            dataKey="value"
            nameKey="name"
            label={({ name, percent }) =>
              `${name} ${(percent! * 100).toFixed(0)}%`
            }
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />

          <Legend verticalAlign="bottom" />
        </PieChart>
      </ResponsiveContainer>
    </DashboardChart>
  );
}
