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
        title="Start with the smallest engagement capable of proving business value."
        subtitle="Whether the priority is enterprise AI architecture, operating execution, proposals or workforce readiness, RightSense routes the problem to the right advisory or platform motion instead of forcing every customer through the same starting point."
        primaryCta={{ label: "Discuss Your Priority", href: "/contact" }}
        secondaryCta={{ label: "Explore the Ecosystem", href: "/platforms" }}
      />
    </>
  );
}
