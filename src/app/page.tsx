import { CTASection } from "@/components/sections/CTASection";
import { DiagnosticSection } from "@/components/sections/DiagnosticSection";
import { Hero } from "@/components/sections/Hero";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { MoatSection } from "@/components/sections/MoatSection";
import { OutcomesSection } from "@/components/sections/OutcomesSection";
import { PlatformsSection } from "@/components/sections/PlatformsSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { WhyRightSenseSection } from "@/components/sections/WhyRightSenseSection";
import { ctaSection } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <MoatSection />
      <PlatformsSection />
      <DiagnosticSection />
      <OutcomesSection />
      <IndustriesSection />
      <HowItWorksSection />
      <WhyRightSenseSection />
      <CTASection
        title={ctaSection.title}
        subtitle={ctaSection.subtitle}
        primaryCta={ctaSection.primaryCta}
        secondaryCta={ctaSection.secondaryCta}
      />
    </>
  );
}
