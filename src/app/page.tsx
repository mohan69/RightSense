import { ProcessRedesignSection } from "@/components/sections/ProcessRedesignSection";
import { CTASection } from "@/components/sections/CTASection";
import { EntryOfferingSection } from "@/components/sections/EntryOfferingSection";
import { Hero } from "@/components/sections/Hero";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { IndustryValueSection } from "@/components/sections/IndustryValueSection";
import { WhyRightSenseSection } from "@/components/sections/WhyRightSenseSection";
import { FounderCredibilitySection } from "@/components/sections/FounderCredibilitySection";

export default function Home() {
  return (
    <>
      <Hero />
      <IndustryValueSection />
      <ProcessRedesignSection />
      <EntryOfferingSection />
      <HowItWorksSection />
      <WhyRightSenseSection />
      <FounderCredibilitySection />
      <CTASection
        title="Bring one economically important problem."
        subtitle="We will confirm the scope, required evidence and measurable KPIs before either side commits to a larger program."
        primaryCta={{ label: "Bring Your Business Problem", href: "/contact?source=business-problem-intake" }}
        secondaryCta={{ label: "Talk to a Co-Founder", href: "/contact?source=founder-conversation" }}
      />
    </>
  );
}
