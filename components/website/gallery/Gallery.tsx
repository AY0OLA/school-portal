import Container from "@/components/website/navbar/Container";
import GalleryGrid from "./GalleryGrid";
import GalleryHeader from "./GalleryHeader";

export default function Gallery() {
  return (
    <section className="py-28">
      <Container>
        <GalleryHeader />

        <GalleryGrid />
      </Container>
    </section>
  );
}
