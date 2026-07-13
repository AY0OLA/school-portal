import Link from "next/link";
import { Plus } from "lucide-react";

import { PageHeader } from "@/components/ui";

export default function SubjectToolbar() {
  return (
    <PageHeader
      title="Subjects"
      description="Manage school subjects."
      action={
        <Link
          href="/admin/academics/subjects/new"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-white transition hover:opacity-90"
        >
          <Plus size={18} />
          New Subject
        </Link>
      }
    />
  );
}
