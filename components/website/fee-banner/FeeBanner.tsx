import { Clock3, ArrowRight } from "lucide-react";

import Container from "@/components/website/navbar/Container";

export default function FeeBanner() {
  return (
    <section className="bg-[#C8A548]">
      <Container>
        <div className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Clock3 className="h-6 w-6 text-black" />

            <p className="text-base font-medium text-black">
              Second-term fee payment deadline:
              <span className="ml-1 underline">30 July 2026</span>
            </p>
          </div>

          <button className="rounded-md bg-[#154734] px-8 py-3 font-semibold text-white transition hover:bg-[#113827]">
            Pay Fees Now →
          </button>
        </div>
      </Container>
    </section>
  );
}
