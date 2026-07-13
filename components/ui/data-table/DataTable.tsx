import { ReactNode } from "react";

type DataTableProps = {
  children: ReactNode;
};

export default function DataTable({ children }: DataTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          {children}
        </table>
      </div>
    </div>
  );
}
