import Image from "next/image";

import Container from "@/components/website/navbar/Container";
import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden pt-16">
      {/* Background */}

      <Image
        src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&h=900&fit=crop&auto=format"
        alt="Students in school"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-primary/80" />

      {/* Content */}

      <Container className="relative z-10 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <HeroContent />

          <HeroStats />
        </div>
      </Container>
    </section>
  );
}
