import Container from "@/components/website/navbar/Container";

import AcademicsHeader from "./AcademicsHeader";
import AcademicCard from "./AcademicCard";
import { academicPrograms } from "./data";

export default function Academics() {
  return (
    <section className="py-28">
      <Container>
        <AcademicsHeader />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {academicPrograms.map((program) => (
            <AcademicCard key={program.title} {...program} />
          ))}
        </div>
      </Container>
    </section>
  );
}
