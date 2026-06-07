export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type CtaLink = {
  label: string;
  href: string;
};

export type Platform = {
  name: string;
  href: string;
  summary: string;
  description?: string;
  icon?: string;
  outcomes?: string[];
};

export type TruthSource = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type Outcome = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type Industry = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

export type IndustryDetail = Industry & {
  summary: string;
  pains: string[];
  outcomes: string[];
};

export type ProblemPoint = {
  icon: string;
  text: string;
};

export type DiagnosticStep = {
  num: string;
  window: string;
  title: string;
  description: string;
};

export type HowItWorksStep = {
  num: string;
  title: string;
  description: string;
  icon: string;
};

export type HeroContent = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  support: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
};

export type SectionContent = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  note?: string;
};

export type PageHeroData = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export type MoatPillar = {
  num: string;
  title: string;
  description: string;
};

export type MoatComparison = {
  competitor: string;
  competitorApproach: string;
  rightsenseApproach: string;
};

export type MoatPageContent = {
  hero: PageHeroData;
  oneLine: string;
  coreTitle: string;
  coreBody: string;
  pillarsTitle: string;
  pillarsSubtitle: string;
  pillars: MoatPillar[];
  comparisonsTitle: string;
  comparisonsSubtitle: string;
  comparisons: MoatComparison[];
  cta: {
    title: string;
    subtitle: string;
    primaryCta: CtaLink;
    secondaryCta?: CtaLink;
  };
};

export type PortfolioRole = {
  platform: string;
  role: string;
  description: string;
  href: string;
};

export type TruthLayer = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type CockpitMetric = {
  label: string;
  description: string;
};

export type ForecastHorizon = {
  label: string;
  description: string;
};

export type WhatIfScenario = {
  label: string;
  description: string;
};

export type RecommendationField = {
  label: string;
  description: string;
};

export type DeploymentOption = {
  title: string;
  description: string;
};

export type TargetRole = {
  role: string;
  description: string;
};

export type Capability = {
  title: string;
  description: string;
  icon?: string;
};

export type FitWithPlatform = {
  title: string;
  body: string;
};

export type AssessmentStep = {
  num: string;
  label: string;
  title: string;
  description: string;
};

export type PlanPhase = {
  phase: string;
  title: string;
  description: string;
};

export type WhenNeededCard = {
  text: string;
};

export type WhenLeadershipNeedsThis = {
  title: string;
  subtitle: string;
  cards: WhenNeededCard[];
};

export type SampleOutputCard = {
  title: string;
  description: string;
};

export type SampleOutput = {
  title: string;
  subtitle: string;
  cards: SampleOutputCard[];
};

export type MinimumRequired = {
  title: string;
  subtitle: string;
  items: string[];
  closing: string;
};

export type DataAccess = {
  title: string;
  points: string[];
};

export type Principle = {
  name: string;
  description: string;
};

export type FormField =
  | {
      name: string;
      label: string;
      type: "text" | "email" | "tel" | "date";
      required?: boolean;
      placeholder?: string;
    }
  | {
      name: string;
      label: string;
      type: "select";
      required?: boolean;
      options: string[];
    }
  | {
      name: string;
      label: string;
      type: "textarea";
      required?: boolean;
      placeholder?: string;
    };

export type PageCta = {
  title: string;
  subtitle: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
};

export type WhyRightSensePoint = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type WhyRightSense = {
  eyebrow: string;
  title: string;
  subtitle: string;
  points: WhyRightSensePoint[];
};

export type Founder = {
  id: string;
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  image: string;
  initials: string;
};

export type FoundingTeam = {
  title: string;
  subtitle: string;
  members: Founder[];
};
