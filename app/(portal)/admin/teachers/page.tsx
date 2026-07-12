import Link from "next/link";
import { Plus } from "lucide-react";

import TeacherTable from "@/components/portal/teachers/TeacherTable";
import { getTeachers } from "@/lib/services/teacher.service";

export default async function TeachersPage() {
  const teachers = await getTeachers();

  const tableData = teachers.map((teacher) => ({
    id: teacher.id,

    employeeId: teacher.employeeId,

    name: `${teacher.firstName} ${teacher.lastName}`,

    department: teacher.department?.name ?? "Not Assigned",

    phone: teacher.phone ?? "-",

    status: teacher.status,
  }));

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-heading font-bold">Teachers</h1>

          <p className="text-gray-500">Manage all registered teachers.</p>
        </div>

        <Link
          href="/admin/teachers/new"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-medium text-white transition hover:opacity-90"
        >
          <Plus size={18} />
          Add Teacher
        </Link>
      </div>

      <TeacherTable data={tableData} />
    </div>
  );
}
