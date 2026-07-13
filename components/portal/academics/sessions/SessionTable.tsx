import {
  DataTable,
  DataTableHeader,
  DataTableBody,
  EmptyState,
} from "@/components/ui/data-table";

import SessionRowActions from "./SessionRowActions";

type Session = {
  id: string;
  name: string;
  startDate: Date | null;
  endDate: Date | null;
  isCurrent: boolean;
  _count: {
    terms: number;
    enrollments: number;
  };
};

type Props = {
  sessions: Session[];
};

export default function SessionTable({ sessions }: Props) {
  if (sessions.length === 0) {
    return (
      <EmptyState
        title="No Academic Sessions"
        description="Create your first academic session to begin."
      />
    );
  }

  return (
    <DataTable>
      <DataTableHeader
        columns={["Session", "Terms", "Enrollments", "Status", "Actions"]}
      />

      <DataTableBody>
        {sessions.map((session) => (
          <tr key={session.id} className="hover:bg-slate-50">
            <td className="px-6 py-4 font-medium">{session.name}</td>

            <td className="px-6 py-4">{session._count.terms}</td>

            <td className="px-6 py-4">{session._count.enrollments}</td>

            <td className="px-6 py-4">
              {session.isCurrent ? (
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                  Current
                </span>
              ) : (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  Inactive
                </span>
              )}
            </td>

            <td className="px-6 py-4">
              <SessionRowActions id={session.id} />
            </td>
          </tr>
        ))}
      </DataTableBody>
    </DataTable>
  );
}
