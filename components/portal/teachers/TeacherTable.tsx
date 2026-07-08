"use client";

import { DataTable } from "@/components/ui/table";

import { teachers } from "@/lib/mock-data/teachers";

import TeacherStatus from "./TeacherStatus";
import TeacherActions from "./TeacherActions";

const columns = [
  {
    id: "employeeId",
    header: "Employee ID",
    accessor: "employeeId",
  },
  {
    id: "teacher",
    header: "Teacher",
    accessor: "name",
  },
  {
    id: "email",
    header: "Email",
    accessor: "email",
  },
  {
    id: "phone",
    header: "Phone",
    accessor: "phone",
  },
  {
    id: "status",
    header: "Status",
    accessor: "status",
    render: (row: any) => <TeacherStatus status={row.status} />,
  },
  {
    id: "actions",
    header: "Actions",
    accessor: "id",
    render: (row: any) => <TeacherActions id={row.id} />,
  },
];

export default function TeacherTable() {
  return <DataTable columns={columns} data={teachers} />;
}
