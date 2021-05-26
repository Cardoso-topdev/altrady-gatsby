import React from "react"

import LandingPageLayout from "../layouts/LandingPageLayout"
import AnnualPlanSection from "../sections/annual-plan"
import FAQSection from "../sections/faq"
import FeatureCTASection from "../sections/feature-cta"
import PeopleSayingSection from "../sections/people-saying"
import PricingHero from "../sections/pricing-hero"

export default function Pricing() {
  return (
    <LandingPageLayout>
      <PricingHero />
      <AnnualPlanSection />
      <FAQSection />
      <FeatureCTASection />
      <PeopleSayingSection />
    </LandingPageLayout>
  )
}
