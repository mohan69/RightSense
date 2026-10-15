import { ProcessRedesignSection } from "@/components/sections/ProcessRedesignSection";
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
      <ProcessRedesignSection />
      <HowItWorksSection />
      <ProblemSection />
      <MoatSection />
      <ProofFirstSection />
      <PlatformsSection />
      <OutcomesSection />
      <IndustriesSection />
      <WhyRightSenseSection />
      <CTASection
        title="Bring one process. Prove the value. Scale what works."
        subtitle="Start with a focused conversation about one workflow. Agree the outcome, the people involved and the evidence needed for a contained proof."
        primaryCta={{ label: "Redesign One Business Process", href: "/contact" }}
        secondaryCta={{ label: "Try the Order Execution Demo", href: "/order-execution-demo" }}
      />
    </>
  );
}
