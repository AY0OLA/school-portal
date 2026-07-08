import { ChevronRight } from "lucide-react";

import Button from "@/components/ui/Button";
import { heroContent } from "@/constants/hero";

export default function HeroContent() {
  return (
    <div className="max-w-xl space-y-6">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {heroContent.badge}
      </p>

      <h1 className="font-heading text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-6xl">
        {heroContent.title.line1}

        <span className="block text-accent">{heroContent.title.line2}</span>
      </h1>

      <p className="max-w-lg text-base leading-relaxed text-white/80">
        {heroContent.description}
      </p>

      <div className="flex flex-wrap gap-4">
        <Button href="/portal">
          <span className="flex items-center gap-2">
            {heroContent.primaryButton}

            <ChevronRight className="h-4 w-4" />
          </span>
        </Button>

        <Button href="/about" variant="secondary">
          {heroContent.secondaryButton}
        </Button>
      </div>
    </div>
  );
}
