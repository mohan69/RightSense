import { ProcessRedesignSection } from "@/components/sections/ProcessRedesignSection";
import { CTASection } from "@/components/sections/CTASection";
import { DiagnosticSection } from "@/components/sections/DiagnosticSection";
import { EntryOfferingSection } from "@/components/sections/EntryOfferingSection";
import { Hero } from "@/components/sections/Hero";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { IndustryValueSection } from "@/components/sections/IndustryValueSection";
import { WhyRightSenseSection } from "@/components/sections/WhyRightSenseSection";

export default function Home() {
  return (
    <>
      <Hero />
      <IndustryValueSection />
      <ProcessRedesignSection />
      <EntryOfferingSection />
      <DiagnosticSection />
      <HowItWorksSection />
      <WhyRightSenseSection />
      <CTASection
        title="Bring one economically important problem."
        subtitle="We will confirm the scope, required evidence and measurable KPIs before either side commits to a larger program."
        primaryCta={{ label: "Start the 48-Hour Diagnostic", href: "/contact?source=48-hour-diagnostic" }}
        secondaryCta={{ label: "Talk to a Co-Founder", href: "/contact?source=founder-conversation" }}
      />
    </>
  );
}
