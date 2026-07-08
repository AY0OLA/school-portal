import { Search } from "lucide-react";

type Props = {
  search: string;
  setSearch: (value: string) => void;
};

export default function TableToolbar({ search, setSearch }: Props) {
  return (
    <div className="flex items-center justify-between gap-4 mb-6">
      <div className="relative w-full max-w-sm">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="w-full rounded-lg border py-2 pl-10 pr-4 outline-none focus:border-primary"
        />
      </div>
    </div>
  );
}
