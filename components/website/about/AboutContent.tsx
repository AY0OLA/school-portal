import { CheckCircle2 } from "lucide-react";

import { aboutContent } from "@/constants/about";
import Button from "@/components/ui/Button";

export default function AboutContent() {
  return (
    <div>
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">
        {aboutContent.badge}
      </p>

      <h2 className="font-heading mt-4 text-4xl font-bold">
        {aboutContent.title}
      </h2>

      <p className="mt-6 leading-8 text-muted-foreground">
        {aboutContent.description}
      </p>

      <div className="mt-8 space-y-4">
        {aboutContent.features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary" />

            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Button href="/about">Learn More</Button>
      </div>
    </div>
  );
}
