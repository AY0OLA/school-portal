import { GraduationCap } from "lucide-react";

export default function LoginHero() {
  return (
    <div className="relative hidden lg:flex  justify-between overflow-hidden bg-primary text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/80" />

      <div className="relative z-10 flex h-full flex-col justify-between p-12">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-10 w-10 text-accent" />

          <div>
            <h2 className="text-3xl font-heading font-bold">
              Greenfield Academy
            </h2>

            <p className="text-white/80">Excellence • Integrity • Leadership</p>
          </div>
        </div>

        <div>
          <h1 className="mb-6 text-5xl font-heading font-bold leading-tight">
            Welcome Back
          </h1>

          <p className="max-w-md text-lg leading-8 text-white/80">
            Access your personalized school portal to manage academics,
            attendance, results, fees and communication—all in one place.
          </p>
        </div>

        <div className="text-sm text-white/70">
          © {new Date().getFullYear()} Greenfield Academy
        </div>
      </div>
    </div>
  );
}
