import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <GraduationCap className="h-5 w-5" />
      </div>

      <span className="font-semibold text-lg">Greenfield Academy</span>
    </Link>
  );
}
