import { Card } from "@/components/ui";

import {
  DataTable,
  DataTableBody,
  DataTableHeader,
  EmptyState,
} from "@/components/ui/data-table";

import EnrollmentRowActions from "./EnrollmentRowActions";
import { EnrollmentRecord } from "./types";

type Props = {
  enrollments: EnrollmentRecord[];
};

export default function EnrollmentTable({ enrollments }: Props) {
  if (enrollments.length === 0) {
    return (
      <EmptyState
        title="No Enrollments"
        description="No students have been enrolled yet."
      />
    );
  }

  return (
    <Card>
      <DataTable>
        <DataTableHeader
          columns={[
            "Admission No.",
            "Student",
            "Class",
            "Session",
            "Enrolled On",
            "Actions",
          ]}
        />

        <DataTableBody>
          {enrollments.map((enrollment) => (
            <tr key={enrollment.id} className="hover:bg-slate-50">
              <td className="px-6 py-4">
                {enrollment.student.admissionNumber}
              </td>

              <td className="px-6 py-4">
                {enrollment.student.firstName} {enrollment.student.lastName}
              </td>

              <td className="px-6 py-4">
                {enrollment.class.name} {enrollment.class.arm}
              </td>

              <td className="px-6 py-4">{enrollment.session.name}</td>

              <td className="px-6 py-4">
                {"createdAt" in enrollment
                  ? new Date(
                      (
                        enrollment as EnrollmentRecord & {
                          createdAt: Date;
                        }
                      ).createdAt,
                    ).toLocaleDateString()
                  : "-"}
              </td>

              <td className="px-6 py-4">
                <EnrollmentRowActions id={enrollment.id} />
              </td>
            </tr>
          ))}
        </DataTableBody>
      </DataTable>
    </Card>
  );
}
