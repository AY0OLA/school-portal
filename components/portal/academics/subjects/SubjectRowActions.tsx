"use client";

import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";

import { deleteSubject } from "@/lib/actions/delete-subject";

type Props = {
  id: string;
};

export default function SubjectRowActions({ id }: Props) {
  async function handleDelete() {
    if (!window.confirm("Delete this subject?")) {
      return;
    }

    await deleteSubject(id);
  }

  return (
    <div className="flex items-center gap-2">
      <Link
        href={`/admin/academics/subjects/${id}/edit`}
        className="rounded-lg p-2 hover:bg-slate-100"
      >
        <Pencil size={18} />
      </Link>

      <button
        onClick={handleDelete}
        className="rounded-lg p-2 text-red-600 hover:bg-red-50"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}
