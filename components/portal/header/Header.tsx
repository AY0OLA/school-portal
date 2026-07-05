import { Bell, Search, UserCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b bg-white px-8">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

        <input
          placeholder="Search..."
          className="w-80 rounded-lg border py-3 pl-11 pr-4"
        />
      </div>

      <div className="flex items-center gap-6">
        <Bell className="h-6 w-6 cursor-pointer text-gray-600" />

        <UserCircle className="h-9 w-9 text-primary" />
      </div>
    </header>
  );
}
