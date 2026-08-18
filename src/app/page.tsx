import { HeroSection } from "@/components/home/hero-section";
import { PainPointsSection } from "@/components/home/pain-points-section";
import { ServicesOverviewSection } from "@/components/home/services-overview-section";
import { ProcessSection } from "@/components/home/process-section";
import { WhyUsSection } from "@/components/home/why-us-section";
import { PricingTeaserSection } from "@/components/home/pricing-teaser-section";
import { CtaSection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <ServicesOverviewSection />
      <ProcessSection />
      <WhyUsSection />
      <PricingTeaserSection />
      <CtaSection />
    </>
  );
}
