import { Badge, Card } from "@/components/ui";

import {
  DataTable,
  DataTableHeader,
  DataTableBody,
  EmptyState,
} from "@/components/ui/data-table";

import DepartmentRowActions from "./DepartmentRowActions";
import { DepartmentWithTeachers } from "./types";

type Props = {
  departments: DepartmentWithTeachers[];
};

export default function DepartmentTable({ departments }: Props) {
  if (departments.length === 0) {
    return (
      <EmptyState
        title="No Departments"
        description="Create your first department."
      />
    );
  }

  return (
    <Card>
      <DataTable>
        <DataTableHeader
          columns={[
            "Department",
            "Teachers",
            "Description",
            "Status",
            "Actions",
          ]}
        />

        <DataTableBody>
          {departments.map((department) => (
            <tr key={department.id} className="hover:bg-slate-50">
              <td className="px-6 py-4 font-medium">{department.name}</td>

              <td className="px-6 py-4">{department.teachers.length}</td>

              <td className="px-6 py-4">{department.description || "-"}</td>

              <td className="px-6 py-4">
                <Badge color="green">Active</Badge>
              </td>

              <td className="px-6 py-4">
                <DepartmentRowActions id={department.id} />
              </td>
            </tr>
          ))}
        </DataTableBody>
      </DataTable>
    </Card>
  );
}
