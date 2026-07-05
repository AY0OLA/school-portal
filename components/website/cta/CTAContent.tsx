import { ctaContent } from "./data";
import CTAButtons from "./CTAButtons";

export default function CTAContent() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="font-mono uppercase tracking-[0.2em] text-accent">
        {ctaContent.badge}
      </p>

      <h2 className="font-heading mt-6 text-4xl text-white md:text-5xl">
        {ctaContent.title}
      </h2>

      <p className="mt-6 leading-8 text-white/80">{ctaContent.description}</p>

      <CTAButtons />
    </div>
  );
}
