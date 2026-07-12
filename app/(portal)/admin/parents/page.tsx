import Link from "next/link";
import { Plus } from "lucide-react";

import ParentTable from "@/components/portal/parents/ParentTable";
import { getParents } from "@/lib/services/parent.service";

export default async function ParentsPage() {
  const parents = await getParents();

  const tableData = parents.map((parent) => ({
    name: `${parent.firstName} ${parent.lastName}`,
    phone: parent.phone,
    email: parent.email ?? "-",
    occupation: parent.occupation ?? "-",
    childrenCount: parent.students.length,
    parentId: parent.id,
  }));

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="font-heading text-3xl font-bold">Parents</h1>

          <p className="text-gray-500">
            Manage all registered parents and guardians.
          </p>
        </div>

        <Link
          href="/admin/parents/new"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-medium text-white transition hover:opacity-90"
        >
          <Plus size={18} />
          Add Parent
        </Link>
      </div>

      <ParentTable data={tableData} />
    </div>
  );
}
