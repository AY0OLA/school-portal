"use client";

import { DataTable } from "@/components/ui/table";

import ParentActions from "./ParentActions";

const columns = [
  {
    id: "parent",
    header: "Parent",
    accessor: "name",
  },
  {
    id: "phone",
    header: "Phone",
    accessor: "phone",
  },
  {
    id: "email",
    header: "Email",
    accessor: "email",
  },
  {
    id: "occupation",
    header: "Occupation",
    accessor: "occupation",
  },
  {
    id: "children",
    header: "Children",
    accessor: "childrenCount",
  },
  {
    id: "actions",
    header: "Actions",
    accessor: "parentId",
    render: (row: any) => <ParentActions id={row.parentId} />,
  },
];

type ParentTableProps = {
  data: any[];
};

export default function ParentTable({ data }: ParentTableProps) {
  return <DataTable columns={columns} data={data} />;
}
