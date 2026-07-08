"use client";

import { DataTable } from "@/components/ui/table";

import { teachers } from "@/lib/mock-data/teachers";

import TeacherStatus from "./TeacherStatus";
import TeacherActions from "./TeacherActions";

const columns = [
  {
    id: "employeeId",
    header: "Employee ID",
    accessor: "employeeId" as const,
  },
  {
    id: "teacher",
    header: "Teacher",
    accessor: "name" as const,
  },
  {
    id: "email",
    header: "Email",
    accessor: "email" as const,
  },
  {
    id: "phone",
    header: "Phone",
    accessor: "phone" as const,
  },
  {
    id: "status",
    header: "Status",
    accessor: "status" as const,
    render: (row: any) => <TeacherStatus status={row.status} />,
  },
  {
    id: "actions",
    header: "Actions",
    accessor: "id" as const,
    render: (row: any) => <TeacherActions id={row.id} />,
  },
];

export default function TeacherTable() {
  return <DataTable columns={columns} data={teachers} />;
}
