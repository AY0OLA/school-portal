import Container from "@/components/website/navbar/Container";
import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function About() {
  return (
    <section id="about" className="bg-background py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AboutImage />

          <AboutContent />
        </div>
      </Container>
    </section>
  );
}
