import { CalendarDays, GraduationCap } from "lucide-react";

export default function DashboardHeader() {
  const now = new Date();

  const hour = now.getHours();

  const greeting =
    hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening";

  const today = now.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary/90 p-8 text-white shadow-lg">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            <GraduationCap className="h-4 w-4" />
            School Management Portal
          </div>

          <h1 className="text-4xl font-bold tracking-tight">
            {greeting}, Administrator 👋
          </h1>

          <p className="max-w-2xl text-white/90">
            Welcome back to your dashboard. Here's a quick overview of your
            school's activities and academic information.
          </p>
        </div>

        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <CalendarDays className="h-5 w-5" />

            <div>
              <p className="text-xs uppercase tracking-widest text-white/70">
                Today
              </p>

              <p className="font-semibold">{today}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
