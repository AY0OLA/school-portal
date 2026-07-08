"use client";

import { DataTable } from "@/components/ui/table";
import { students } from "@/lib/mock-data";

import StudentStatus from "./StudentStatus";
import StudentActions from "./StudentActions";

const columns = [
  {
    id: "admission",
    header: "Admission No",
    accessor: "id",
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
    accessor: "id",
    render: (row: any) => <StudentActions id={row.id} />,
  },
];

export default function StudentTable() {
  return <DataTable columns={columns} data={students} />;
}
