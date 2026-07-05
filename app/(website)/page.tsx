import Hero from "@/components/website/hero/index";
import About from "@/components/website/about/index";
import FeeBanner from "@/components/website/fee-banner/index";
import Academics from "@/components/website/academics/index";
import News from "@/components/website/news/index";
import Facilities from "@/components/website/facilities/index";
import Testimonials from "@/components/website/testimonials/index";
import Gallery from "@/components/website/gallery/index";
import CTA from "@/components/website/cta/index";
import Contact from "@/components/website/contact/index";
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeeBanner />
      <About />
      <Academics />
      <News />
      <Facilities />
      <Testimonials />
      <Gallery />
      <CTA />
      <Contact />
    </>
  );
}
