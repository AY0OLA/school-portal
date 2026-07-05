import Container from "@/components/website/navbar/Container";
import FacilitiesHeader from "./FacilitiesHeader";
import FacilityCard from "./FacilityCard";
import { facilities } from "./data";

export default function Facilities() {
  return (
    <section className="py-28">
      <Container>
        <FacilitiesHeader />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {facilities.map((facility) => (
            <FacilityCard key={facility.title} {...facility} />
          ))}
        </div>
      </Container>
    </section>
  );
}
