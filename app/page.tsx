import Hero from "@/components/website/hero/index";
import Navbar from "@/components/website/navbar/index";
import About from "@/components/website/about/index";
import FeeBanner from "@/components/website/fee-banner/index"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeeBanner/>
      <About />
    </>
  );
}
