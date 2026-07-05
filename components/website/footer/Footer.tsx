import Container from "@/components/website/navbar/Container";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="bg-primary">
      <Container>
        <div className="grid gap-16 py-20 lg:grid-cols-3">
          <FooterBrand />

          <FooterLinks />

          <FooterContact />
        </div>

        <FooterBottom />
      </Container>
    </footer>
  );
}
