import Link from "next/link";
import { Plus } from "lucide-react";

import StudentTable from "@/components/portal/students/StudentTable";
import { getStudents } from "@/lib/services/student.service";

export default async function StudentsPage() {
  const students = await getStudents();

 const tableData = students.map((student) => ({
   admissionNumber: student.admissionNumber,
   name: `${student.firstName} ${student.lastName}`,
   class: student.class?.name ?? "Not Assigned",
   gender: student.gender,
   status: student.status,
   studentId: student.id,
 }));

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-heading font-bold">Students</h1>

          <p className="text-gray-500">Manage all registered students.</p>
        </div>

        <Link
          href="/admin/students/new"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-medium text-white transition hover:opacity-90"
        >
          <Plus size={18} />
          Add Student
        </Link>
      </div>

      <StudentTable data={tableData} />
    </div>
  );
}
