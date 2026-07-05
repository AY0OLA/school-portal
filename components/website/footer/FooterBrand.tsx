import { GraduationCap } from "lucide-react";

export default function FooterBrand() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-accent p-3">
          <GraduationCap className="h-6 w-6 text-primary" />
        </div>

        <div>
          <h3 className="font-heading text-2xl text-white">
            Greenfield Academy
          </h3>

          <p className="text-white/70">Excellence • Integrity • Leadership</p>
        </div>
      </div>

      <p className="mt-6 max-w-sm leading-8 text-white/70">
        Greenfield Academy is committed to nurturing future leaders through
        academic excellence, innovation, discipline and character development.
      </p>
    </div>
  );
}
