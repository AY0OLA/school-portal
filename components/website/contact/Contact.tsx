import Container from "@/components/website/navbar/Container";

import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="bg-gray-50 py-28">
      <Container>
        <ContactHeader />

        <div className="grid gap-16 lg:grid-cols-2">
          <ContactInfo />

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
