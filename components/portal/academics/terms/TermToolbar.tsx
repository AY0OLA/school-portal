import Link from "next/link";
import { Plus } from "lucide-react";

import { PageHeader } from "@/components/ui";

export default function TermToolbar() {
  return (
    <PageHeader
      title="Academic Terms"
      description="Manage school academic terms."
      action={
        <Link
          href="/admin/academics/terms/new"
          className="rounded-xl bg-primary px-5 py-3 text-white hover:opacity-90"
        >
          <span className="inline-flex items-center gap-2">
            <Plus size={18} />
            New Term
          </span>
        </Link>
      }
    />
  );
}
