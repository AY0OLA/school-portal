import { Card } from "@/components/ui";

import {
  DataTable,
  DataTableBody,
  DataTableHeader,
  EmptyState,
} from "@/components/ui/data-table";

import ClassSubjectRowActions from "./ClassSubjectRowActions";
import { ClassSubjectAssignment } from "./types";

type Props = {
  assignments: ClassSubjectAssignment[];
};

export default function ClassSubjectTable({ assignments }: Props) {
  if (assignments.length === 0) {
    return (
      <EmptyState
        title="No Assignments"
        description="Assign a subject to a class."
      />
    );
  }

  return (
    <Card>
      <DataTable>
        <DataTableHeader columns={["Class", "Subject", "Code", "Actions"]} />

        <DataTableBody>
          {assignments.map((assignment) => (
            <tr key={assignment.id} className="hover:bg-slate-50">
              <td className="px-6 py-4">
                {assignment.class.name} {assignment.class.arm}
              </td>

              <td className="px-6 py-4">{assignment.subject.name}</td>

              <td className="px-6 py-4">{assignment.subject.code}</td>

              <td className="px-6 py-4">
                <ClassSubjectRowActions id={assignment.id} />
              </td>
            </tr>
          ))}
        </DataTableBody>
      </DataTable>
    </Card>
  );
}
