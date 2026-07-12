"use client";

import { DataTable } from "@/components/ui/table";
import StudentStatus from "./StudentStatus";
import StudentActions from "./StudentActions";

const columns = [
  {
    id: "admission",
    header: "Admission No",
    accessor: "admissionNumber",
  },
  {
    id: "student",
    header: "Student",
    accessor: "name",
  },
  {
    id: "class",
    header: "Class",
    accessor: "class",
  },
  {
    id: "gender",
    header: "Gender",
    accessor: "gender",
  },
  {
    id: "status",
    header: "Status",
    accessor: "status",
    render: (row: any) => <StudentStatus status={row.status} />,
  },
  {
    id: "actions",
    header: "Actions",
    accessor: "studentId",
    render: (row: any) => <StudentActions id={row.studentId} />,
  },
];

type StudentTableProps = {
  data: any[];
};

export default function StudentTable({ data }: StudentTableProps) {
  return <DataTable columns={columns} data={data} />;
}