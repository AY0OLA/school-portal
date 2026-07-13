import { Badge, Card } from "@/components/ui";

import {
  DataTable,
  DataTableBody,
  DataTableHeader,
  EmptyState,
} from "@/components/ui/data-table";

import SubjectRowActions from "./SubjectRowActions";
import { SubjectWithRelations } from "./types";

type Props = {
  subjects: SubjectWithRelations[];
};

export default function SubjectTable({ subjects }: Props) {
  if (subjects.length === 0) {
    return (
      <EmptyState
        title="No Subjects"
        description="Create your first subject."
      />
    );
  }

  return (
    <Card>
      <DataTable>
        <DataTableHeader
          columns={[
            "Code",
            "Subject",
            "Teachers",
            "Classes",
            "Status",
            "Actions",
          ]}
        />

        <DataTableBody>
          {subjects.map((subject) => (
            <tr key={subject.id} className="hover:bg-slate-50">
              <td className="px-6 py-4 font-medium">{subject.code}</td>

              <td className="px-6 py-4">{subject.name}</td>

              <td className="px-6 py-4">{subject.teacherSubjects.length}</td>

              <td className="px-6 py-4">{subject.classSubjects.length}</td>

              <td className="px-6 py-4">
                <Badge color="green">Active</Badge>
              </td>

              <td className="px-6 py-4">
                <SubjectRowActions id={subject.id} />
              </td>
            </tr>
          ))}
        </DataTableBody>
      </DataTable>
    </Card>
  );
}
