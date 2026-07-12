import ParentForm from "@/components/portal/parents/ParentForm";

import { getUnassignedStudents } from "@/lib/services/parent.service";

export default async function NewParentPage() {
  const students = await getUnassignedStudents();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-3xl font-bold">Add Parent</h1>

        <p className="text-gray-500">Register a new parent or guardian.</p>
      </div>

      <ParentForm mode="create" students={students} />
    </div>
  );
}
