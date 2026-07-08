"use client";

import { useMemo, useState } from "react";
import TableToolbar from "./TableToolbar";
import TablePagination from "./TablePagination";
import TableEmpty from "./TableEmpty";

type Column<T> = {
  id: string;
  header: string;
  accessor: keyof T;
  render?: (row: T) => React.ReactNode;
};

type Props<T> = {
  columns: Column<T>[];
  data: T[];
};

export default function DataTable<T extends Record<string, any>>({
  columns,
  data,
}: Props<T>) {
  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);

  const perPage = 10;

  const filtered = useMemo(() => {
    return data.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(search.toLowerCase()),
    );
  }, [data, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));

  const rows = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <TableToolbar search={search} setSearch={setSearch} />

      {rows.length === 0 ? (
        <TableEmpty />
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-slate-50">
                  {columns.map((column, index) => (
                    <th
                      key={`${String(column.accessor)}-${index}`}
                      className="px-4 py-3 text-left text-sm font-semibold"
                    >
                      {column.header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {rows.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-slate-50">
                    {columns.map((column, index) => (
                      <td
                        key={`${String(column.accessor)}-${index}`}
                        className="px-4 py-4"
                      >
                        {column.render
                          ? column.render(row)
                          : row[column.accessor]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <TablePagination
            page={page}
            totalPages={totalPages}
            setPage={setPage}
          />
        </>
      )}
    </div>
  );
}
