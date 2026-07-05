"use client";

import { CalendarDays } from "lucide-react";

export default function DashboardHeader() {
  const now = new Date();

  const greeting =
    now.getHours() < 12
      ? "Good Morning"
      : now.getHours() < 17
        ? "Good Afternoon"
        : "Good Evening";

  const date = now.toLocaleDateString("en-NG", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="mb-8 flex flex-col justify-between gap-6 rounded-2xl bg-white p-8 shadow-sm md:flex-row md:items-center">
      <div>
        <p className="text-sm font-medium text-primary">
          {greeting}, Administrator 👋
        </p>

        <h1 className="mt-2 text-3xl font-heading font-bold">
          Dashboard Overview
        </h1>

        <p className="mt-2 text-gray-500">
          Here's what's happening in your school today.
        </p>
      </div>

      <div className="flex items-center gap-3 rounded-xl bg-slate-100 px-5 py-3">
        <CalendarDays className="h-5 w-5 text-primary" />

        <span className="text-sm font-medium">{date}</span>
      </div>
    </section>
  );
}
