import { Badge, Card } from "@/components/ui";

import {
  DataTable,
  DataTableBody,
  DataTableHeader,
  EmptyState,
} from "@/components/ui/data-table";

import ClassRowActions from "./ClassRowActions";
import { ClassWithRelations } from "./types";

type Props = {
  classes: ClassWithRelations[];
};

export default function ClassTable({ classes }: Props) {
  if (classes.length === 0) {
    return (
      <EmptyState title="No Classes" description="Create your first class." />
    );
  }

  return (
    <Card>
      <DataTable>
        <DataTableHeader
          columns={[
            "Class",
            "Teacher",
            "Students",
            "Subjects",
            "Room",
            "Capacity",
            "Status",
            "Actions",
          ]}
        />

        <DataTableBody>
          {classes.map((item) => (
            <tr key={item.id} className="hover:bg-slate-50">
              <td className="px-6 py-4 font-medium">
                {item.name} {item.arm}
              </td>

              <td className="px-6 py-4">
                {item.classTeacher
                  ? `${item.classTeacher.firstName} ${item.classTeacher.lastName}`
                  : "-"}
              </td>

              <td className="px-6 py-4">{item.students.length}</td>

              <td className="px-6 py-4">{item.classSubjects.length}</td>

              <td className="px-6 py-4">{item.room ?? "-"}</td>

              <td className="px-6 py-4">{item.capacity ?? "-"}</td>

              <td className="px-6 py-4">
                <Badge color="green">Active</Badge>
              </td>

              <td className="px-6 py-4">
                <ClassRowActions id={item.id} />
              </td>
            </tr>
          ))}
        </DataTableBody>
      </DataTable>
    </Card>
  );
}
