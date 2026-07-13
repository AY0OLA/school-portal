export default function DashboardLoading() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Header */}
      <div className="h-44 rounded-3xl bg-slate-200" />

      {/* Stats */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="h-36 rounded-2xl bg-slate-200" />
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="h-[420px] rounded-3xl bg-slate-200" />
        ))}
      </div>

      {/* Bottom */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="h-[420px] rounded-3xl bg-slate-200" />
        <div className="h-[420px] rounded-3xl bg-slate-200" />
      </div>
    </div>
  );
}
