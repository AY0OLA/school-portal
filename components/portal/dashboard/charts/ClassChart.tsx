"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import DashboardChart from "./DashboardChart";

type Props = {
  data: {
    name: string;
    students: number;
  }[];
};

export default function ClassChart({ data }: Props) {
  return (
    <DashboardChart
      title="Students by Class"
      subtitle="Number of students in each class"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="4 4" />

          <XAxis dataKey="name" />

          <YAxis allowDecimals={false} />

          <Tooltip />

          <Bar dataKey="students" radius={[8, 8, 0, 0]} fill="#2563EB" />
        </BarChart>
      </ResponsiveContainer>
    </DashboardChart>
  );
}
