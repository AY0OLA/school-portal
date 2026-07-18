import Link from "next/link";
import { Eye, Pencil, Trash2, Lock, Send } from "lucide-react";

import ExamStatusBadge from "./ExamStatusBadge";

type Exam = {
  id: string;
  name: string;
  totalMark: number;
  status: "DRAFT" | "ACTIVE" | "LOCKED" | "PUBLISHED";

  session: {
    id: string;
    name: string;
  };

  term: {
    id: string;
    name: string;
  };

  startDate: Date | null;
  endDate: Date | null;
};

type Props = {
  exams: Exam[];
};

function formatDate(date: Date | null) {
  if (!date) return "-";

  return new Intl.DateTimeFormat("en-NG", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export default function ExamTable({ exams }: Props) {
  if (exams.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
        <h2 className="text-lg font-semibold">No examinations created</h2>

        <p className="mt-2 text-sm text-slate-500">
          Create your first examination to begin score management.
        </p>

        <Link
          href="/admin/examinations/create"
          className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
        >
          Create Exam
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-50">
            <tr className="text-left text-sm font-semibold text-slate-600">
              <th className="px-6 py-4">Exam</th>
              <th className="px-6 py-4">Session</th>
              <th className="px-6 py-4">Term</th>
              <th className="px-6 py-4">Total Marks</th>
              <th className="px-6 py-4">Start</th>
              <th className="px-6 py-4">End</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {exams.map((exam) => (
              <tr key={exam.id} className="border-t hover:bg-slate-50">
                <td className="px-6 py-4 font-medium">{exam.name}</td>

                <td className="px-6 py-4">{exam.session.name}</td>

                <td className="px-6 py-4">{exam.term.name}</td>

                <td className="px-6 py-4">{exam.totalMark}</td>

                <td className="px-6 py-4">{formatDate(exam.startDate)}</td>

                <td className="px-6 py-4">{formatDate(exam.endDate)}</td>

                <td className="px-6 py-4">
                  <ExamStatusBadge status={exam.status} />
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-end gap-2">
                    <Link
                      href={`/admin/examinations/${exam.id}/view`}
                      className="rounded-lg p-2 hover:bg-slate-100"
                    >
                      <Eye size={18} />
                    </Link>

                    <Link
                      href={`/admin/examinations/${exam.id}/edit`}
                      className="rounded-lg p-2 hover:bg-slate-100"
                    >
                      <Pencil size={18} />
                    </Link>

                    <button
                      className="rounded-lg p-2 hover:bg-slate-100"
                      type="button"
                    >
                      <Send size={18} />
                    </button>

                    <button
                      className="rounded-lg p-2 hover:bg-slate-100"
                      type="button"
                    >
                      <Lock size={18} />
                    </button>

                    <button
                      className="rounded-lg p-2 text-red-600 hover:bg-red-50"
                      type="button"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
