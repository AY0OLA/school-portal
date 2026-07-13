import { Badge, Card } from "@/components/ui";

import {
  DataTable,
  DataTableBody,
  DataTableHeader,
  EmptyState,
} from "@/components/ui/data-table";

import { format } from "date-fns";

import TermRowActions from "./TermRowActions";

import { TermWithSession } from "./types";

type Props = {
  terms: TermWithSession[];
};

export default function TermTable({ terms }: Props) {
  if (terms.length === 0) {
    return (
      <EmptyState
        title="No Terms Found"
        description="Create your first academic term."
      />
    );
  }

  return (
    <Card>
      <DataTable>
        <DataTableHeader
          columns={[
            "Term",
            "Session",
            "Start Date",
            "End Date",
            "Status",
            "Actions",
          ]}
        />

        <DataTableBody>
          {terms.map((term) => (
            <tr key={term.id} className="hover:bg-slate-50">
              <td className="px-6 py-4 font-medium">{term.name}</td>

              <td className="px-6 py-4">{term.session.name}</td>

              <td className="px-6 py-4">
                {term.startDate ? format(term.startDate, "dd MMM yyyy") : "-"}
              </td>

              <td className="px-6 py-4">
                {term.endDate ? format(term.endDate, "dd MMM yyyy") : "-"}
              </td>

              <td className="px-6 py-4">
                <Badge color={term.isCurrent ? "green" : "gray"}>
                  {term.isCurrent ? "Current" : "Inactive"}
                </Badge>
              </td>

              <td className="px-6 py-4">
                <TermRowActions id={term.id} />
              </td>
            </tr>
          ))}
        </DataTableBody>
      </DataTable>
    </Card>
  );
}
