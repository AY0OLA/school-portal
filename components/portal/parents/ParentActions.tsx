import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";

type Props = {
  id: string;
};

export default function ParentActions({ id }: Props) {
  return (
    <div className="flex gap-2">
      <Link
        href={`/admin/parents/${id}`}
        className="rounded-lg bg-slate-100 p-2 hover:bg-blue-100"
      >
        <Eye size={18} />
      </Link>

      <Link
        href={`/admin/parents/${id}/edit`}
        className="rounded-lg bg-slate-100 p-2 hover:bg-green-100"
      >
        <Pencil size={18} />
      </Link>

      <button
        type="button"
        className="rounded-lg bg-slate-100 p-2 hover:bg-red-100"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}
