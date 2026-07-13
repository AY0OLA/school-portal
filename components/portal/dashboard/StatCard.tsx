import { LucideIcon, TrendingUp } from "lucide-react";

type StatCardProps = {
  title: string;
  value: number | string;
  Icon: LucideIcon;
  color: string;
};

export default function StatCard({ title, value, Icon, color }: StatCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl">
      {/* Background Decoration */}
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-slate-100 transition-transform duration-500 group-hover:scale-125" />

      <div className="relative flex items-start justify-between">
        <div className="space-y-3">
          <p className="text-sm font-medium tracking-wide text-slate-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            {value}
          </h2>

          <div className="flex items-center gap-1 text-xs font-medium text-emerald-600">
            <TrendingUp className="h-4 w-4" />
            <span>Live Data</span>
          </div>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color} shadow-lg transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon className="h-7 w-7 text-white" />
        </div>
      </div>
    </article>
  );
}
