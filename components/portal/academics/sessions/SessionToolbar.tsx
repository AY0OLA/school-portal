import Link from "next/link";
import { Plus, Search } from "lucide-react";

type Props = {
  search?: string;
};

export default function SessionToolbar({ search }: Props) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <h1 className="text-3xl font-bold">Academic Sessions</h1>

        <p className="mt-2 text-slate-500">
          Create and manage school academic sessions.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative">
          <Search
            className="absolute left-3 top-3.5 text-slate-400"
            size={18}
          />

          <input
            defaultValue={search}
            placeholder="Search session..."
            className="w-72 rounded-xl border border-slate-300 py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <Link
          href="/admin/academics/sessions/new"
          className="rounded-xl bg-primary px-5 py-3 text-white"
        >
          + New Session
        </Link>
      </div>
    </div>
  );
}
