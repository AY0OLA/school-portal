import Link from "next/link";
import { Plus } from "lucide-react";

import { PageHeader } from "@/components/ui";

export default function ClassToolbar() {
  return (
    <PageHeader
      title="Classes"
      description="Manage school classes."
      action={
        <Link
          href="/admin/academics/classes/new"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-white transition hover:opacity-90"
        >
          <Plus size={18} />
          New Class
        </Link>
      }
    />
  );
}
