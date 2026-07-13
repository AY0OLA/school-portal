"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import DashboardChart from "./DashboardChart";

type Props = {
  data: {
    name: string;
    teachers: number;
  }[];
};

export default function DepartmentChart({ data }: Props) {
  return (
    <DashboardChart
      title="Teachers by Department"
      subtitle="Teacher distribution across departments"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="4 4" />

          <XAxis dataKey="name" />

          <YAxis allowDecimals={false} />

          <Tooltip />

          <Bar dataKey="teachers" radius={[8, 8, 0, 0]} fill="#10B981" />
        </BarChart>
      </ResponsiveContainer>
    </DashboardChart>
  );
}
