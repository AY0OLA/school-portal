import Container from "@/components/website/navbar/Container";

import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./data";

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-28">
      <Container>
        <TestimonialsHeader />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
