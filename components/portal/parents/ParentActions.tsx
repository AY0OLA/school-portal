"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, Pencil, Trash2 } from "lucide-react";

import { deleteParent } from "@/lib/actions/delete-parent";

type Props = {
  id: string;
};

export default function ParentActions({ id }: Props) {
  const router = useRouter();

  async function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this parent?",
    );

    if (!confirmed) return;

    const result = await deleteParent(id);

    if (!result.success) {
      alert(result.message);
      return;
    }

    alert(result.message);

    router.refresh();
  }

  return (
    <div className="flex gap-2">
      <Link
        href={`/admin/parents/${id}`}
        className="rounded-lg bg-slate-100 p-2 transition hover:bg-blue-100"
      >
        <Eye size={18} />
      </Link>

      <Link
        href={`/admin/parents/${id}/edit`}
        className="rounded-lg bg-slate-100 p-2 transition hover:bg-green-100"
      >
        <Pencil size={18} />
      </Link>

      <button
        type="button"
        onClick={handleDelete}
        className="rounded-lg bg-slate-100 p-2 transition hover:bg-red-100"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}
