import { heroStats } from "@/constants/hero";

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 gap-5">
      {heroStats.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-white/15 bg-white/10 p-8 backdrop-blur-xl transition-all duration-300 hover:bg-white/15 bg-white/10 p-6 backdrop-blur-sm"
        >
          <h2 className="mb-2 text-4xl font-bold text-accent">{item.value}</h2>

          <p className="text-white/80">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
