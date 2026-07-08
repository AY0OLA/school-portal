import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";

type Props = {
  id: string;
};

export default function StudentActions({ id }: Props) {
  return (
    <div className="flex gap-2">
      <Link
        href={`/admin/students/${id}`}
        className="rounded-lg bg-slate-100 p-2 hover:bg-blue-100"
      >
        <Eye size={18} />
      </Link>

      <Link
        href={`/admin/students/${id}/edit`}
        className="rounded-lg bg-slate-100 p-2 hover:bg-green-100"
      >
        <Pencil size={18} />
      </Link>

      <button className="rounded-lg bg-slate-100 p-2 hover:bg-red-100">
        <Trash2 size={18} />
      </button>
    </div>
  );
}
