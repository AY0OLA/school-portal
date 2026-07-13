type Props = {
  columns: string[];
};

export default function DataTableHeader({ columns }: Props) {
  return (
    <thead className="bg-slate-50">
      <tr>
        {columns.map((column) => (
          <th
            key={column}
            className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600"
          >
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
}
