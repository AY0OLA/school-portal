import { Card } from "@/components/ui";

import {
  DataTable,
  DataTableBody,
  DataTableHeader,
  EmptyState,
} from "@/components/ui/data-table";

import TeacherSubjectRowActions from "./TeacherSubjectRowActions";
import { TeacherSubjectAssignment } from "./types";

type Props = {
  assignments: TeacherSubjectAssignment[];
};

export default function TeacherSubjectTable({ assignments }: Props) {
  if (assignments.length === 0) {
    return (
      <EmptyState
        title="No Assignments"
        description="Assign a subject to a teacher."
      />
    );
  }

  return (
    <Card>
      <DataTable>
        <DataTableHeader columns={["Teacher", "Subject", "Code", "Actions"]} />

        <DataTableBody>
          {assignments.map((assignment) => (
            <tr key={assignment.id} className="hover:bg-slate-50">
              <td className="px-6 py-4">
                {assignment.teacher.firstName} {assignment.teacher.lastName}
              </td>

              <td className="px-6 py-4">{assignment.subject.name}</td>

              <td className="px-6 py-4">{assignment.subject.code}</td>

              <td className="px-6 py-4">
                <TeacherSubjectRowActions id={assignment.id} />
              </td>
            </tr>
          ))}
        </DataTableBody>
      </DataTable>
    </Card>
  );
}
