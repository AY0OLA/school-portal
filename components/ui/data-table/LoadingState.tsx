export default function LoadingState() {
  return (
    <div className="animate-pulse space-y-4 p-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="h-12 rounded-xl bg-slate-200" />
      ))}
    </div>
  );
}
