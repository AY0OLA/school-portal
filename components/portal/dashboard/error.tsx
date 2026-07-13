"use client";

type Props = {
  error: Error;
  reset: () => void;
};

export default function DashboardError({ error, reset }: Props) {
  console.error(error);

  return (
    <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
      <h2 className="text-2xl font-bold">Something went wrong</h2>

      <p className="mt-3 text-slate-500">We couldn't load the dashboard.</p>

      <button
        onClick={reset}
        className="mt-6 rounded-xl bg-primary px-6 py-3 text-white transition hover:opacity-90"
      >
        Try Again
      </button>
    </div>
  );
}
