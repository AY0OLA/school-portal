"use client";

import { DataTable } from "@/components/ui/table";

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
    id: "department",
    header: "Department",
    accessor: "department",
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

type TeacherTableProps = {
  data: any[];
};

export default function TeacherTable({ data }: TeacherTableProps) {
  return <DataTable columns={columns} data={data} />;
}
