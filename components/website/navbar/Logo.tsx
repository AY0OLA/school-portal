import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
      aria-label="Greenfield Academy Home"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
        <GraduationCap className="h-6 w-6" />
      </div>

      <div>
        <h1 className="text-lg font-bold leading-none">Greenfield Academy</h1>

        <p className="text-xs text-muted-foreground">
          Excellence • Integrity • Innovation
        </p>
      </div>
    </Link>
  );
}
