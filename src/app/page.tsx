import { CtaSection } from "../features/home/view/cta_section";
import { FeaturedSection } from "../features/home/view/featured_section";
import { HeroSection } from "../features/home/view/hero_section";
import { WhySection } from "../features/home/view/why_section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <WhySection />
      <CtaSection />
    </>
  );
}
