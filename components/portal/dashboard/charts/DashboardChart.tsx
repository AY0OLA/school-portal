"use client";

import { ReactNode } from "react";

type DashboardChartProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function DashboardChart({
  title,
  subtitle,
  children,
}: DashboardChartProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="border-b border-slate-100 px-6 py-5">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>

        {subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}
      </div>

      <div className="h-80 p-6">{children}</div>
    </section>
  );
}
