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

const data = [
  { month: "Jan", revenue: 2.4 },
  { month: "Feb", revenue: 3.1 },
  { month: "Mar", revenue: 4.2 },
  { month: "Apr", revenue: 3.7 },
  { month: "May", revenue: 5.5 },
  { month: "Jun", revenue: 6.1 },
];

export default function RevenueChart() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">
        Monthly Fee Collection (₦M)
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="4 4" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="revenue" radius={[6, 6, 0, 0]} fill="#16a34a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
