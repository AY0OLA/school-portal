import { GraduationCap } from "lucide-react";

export default function FooterBrand() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
          <GraduationCap className="h-6 w-6" />
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
