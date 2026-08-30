import { CTASection } from "@/components/sections/CTASection";
import { Hero } from "@/components/sections/Hero";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { MoatSection } from "@/components/sections/MoatSection";
import { OutcomesSection } from "@/components/sections/OutcomesSection";
import { PlatformsSection } from "@/components/sections/PlatformsSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProofFirstSection } from "@/components/sections/ProofFirstSection";
import { WhyRightSenseSection } from "@/components/sections/WhyRightSenseSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <MoatSection />
      <ProofFirstSection />
      <PlatformsSection />
      <OutcomesSection />
      <IndustriesSection />
      <HowItWorksSection />
      <WhyRightSenseSection />
      <CTASection
        title="Bring one economically important problem. Let us earn the right to scale."
        subtitle="Start with a contained, governed value proof. If RightSense cannot demonstrate a credible economic signal, do not buy a broader platform. If value is demonstrated, agree how to verify it and decide whether continuous use is justified."
        primaryCta={{ label: "Discuss a Value Proof", href: "/contact" }}
        secondaryCta={{ label: "Explore PulseIQ", href: "/pulseiq" }}
      />
    </>
  );
}
