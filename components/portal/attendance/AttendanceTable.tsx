import { format } from "date-fns";

import { Card } from "@/components/ui";

import {
  DataTable,
  DataTableHeader,
  DataTableBody,
  EmptyState,
} from "@/components/ui/data-table";

import { AttendanceRecord } from "./types";

type Props = {
  records: AttendanceRecord[];
};

export default function AttendanceTable({ records }: Props) {
  if (records.length === 0) {
    return (
      <EmptyState
        title="No Attendance Records"
        description="Attendance has not been taken yet."
      />
    );
  }

  return (
    <Card>
      <DataTable>
        <DataTableHeader
          columns={[
            "Date",
            "Admission No.",
            "Student",
            "Class",
            "Session",
            "Status",
            "Remarks",
          ]}
        />

        <DataTableBody>
          {records.map((record) => (
            <tr key={record.id} className="border-b hover:bg-slate-50">
              <td className="px-4 py-3">{format(record.date, "dd/MM/yyyy")}</td>

              <td className="px-4 py-3">{record.student.admissionNumber}</td>

              <td className="px-4 py-3">
                {record.student.firstName} {record.student.lastName}
              </td>

              <td className="px-4 py-3">
                {record.class.name} {record.class.arm}
              </td>

              <td className="px-4 py-3">{record.session.name}</td>

              <td className="px-4 py-3">{record.status}</td>

              <td className="px-4 py-3">{record.remarks ?? "-"}</td>
            </tr>
          ))}
        </DataTableBody>
      </DataTable>
    </Card>
  );
}
