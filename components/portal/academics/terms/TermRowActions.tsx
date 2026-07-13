"use client";

import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";

import { deleteTerm } from "@/lib/actions/delete-term";

type Props = {
  id: string;
};

export default function TermRowActions({ id }: Props) {
  async function handleDelete() {
    if (!window.confirm("Delete this academic term?")) return;

    await deleteTerm(id);
  }

  return (
    <div className="flex items-center gap-2">
      <Link
        href={`/admin/academics/terms/${id}/edit`}
        className="rounded-lg p-2 hover:bg-slate-100"
      >
        <Pencil size={16} />
      </Link>

      <button
        onClick={handleDelete}
        className="rounded-lg p-2 text-red-600 hover:bg-red-50"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}
