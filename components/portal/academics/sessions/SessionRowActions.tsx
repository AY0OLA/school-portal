"use client";

import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";

import { deleteAcademicSession } from "@/lib/actions/delete-academic-session";

type Props = {
  id: string;
};

export default function SessionRowActions({ id }: Props) {
  async function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this academic session?",
    );

    if (!confirmed) return;

    await deleteAcademicSession(id);
  }

  return (
    <div className="flex items-center gap-2">
      <Link
        href={`/admin/academics/sessions/${id}/edit`}
        className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100"
      >
        <Pencil className="h-4 w-4" />
      </Link>

      <button
        onClick={handleDelete}
        className="rounded-lg p-2 text-red-600 transition hover:bg-red-50"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
}
