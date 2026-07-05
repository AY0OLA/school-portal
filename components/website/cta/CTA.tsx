import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-primary py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="inline-block rounded-full bg-accent text-accent-foreground hover:opacity-90 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-accent">
          Admissions Open
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
          Begin Your Child's Journey Today
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80">
          Applications are now open for the 2026/2027 academic session. Join
          Greenfield Academy and give your child access to excellent education,
          leadership development and lifelong opportunities.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Apply Now
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/contact"
            className="rounded-lg border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-primary"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
