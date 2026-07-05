import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ctaContent } from "./data";

export default function CTAButtons() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">
      <Link
        href={ctaContent.primaryButton.href}
        className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 font-semibold text-black transition hover:opacity-90"
      >
        {ctaContent.primaryButton.text}
        <ArrowRight size={18} />
      </Link>

      <Link
        href={ctaContent.secondaryButton.href}
        className="inline-flex items-center rounded-lg border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-primary"
      >
        {ctaContent.secondaryButton.text}
      </Link>
    </div>
  );
}
