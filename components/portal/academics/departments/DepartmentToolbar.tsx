import Link from "next/link";
import { Plus } from "lucide-react";

import { PageHeader } from "@/components/ui";

export default function DepartmentToolbar() {
  return (
    <PageHeader
      title="Departments"
      description="Manage academic departments."
      action={
        <Link
          href="/admin/academics/departments/new"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-white transition hover:opacity-90"
        >
          <Plus size={18} />
          New Department
        </Link>
      }
    />
  );
}
