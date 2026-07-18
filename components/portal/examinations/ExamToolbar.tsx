"use client";

import Link from "next/link";

export default function ExamToolbar() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold">Examination Management</h1>

        <p className="text-sm text-slate-500">
          Manage examinations, score entry and result publishing.
        </p>
      </div>

      <Link
        href="/admin/examinations/create"
        className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
      >
        + Create Exam
      </Link>
    </div>
  );
}
