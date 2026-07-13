"use client";

import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";

import { deleteDepartment } from "@/lib/actions/delete-department";

type Props = {
  id: string;
};

export default function DepartmentRowActions({ id }: Props) {
  async function handleDelete() {
    const confirmed = window.confirm("Delete this department?");

    if (!confirmed) return;

    await deleteDepartment(id);
  }

  return (
    <div className="flex items-center gap-2">
      <Link
        href={`/admin/academics/departments/${id}/edit`}
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
