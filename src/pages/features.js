import React from "react"

import LandingPageLayout from "../layouts/LandingPageLayout"
import HeroSection from "../sections/hero"
import AllFeatures from "../sections/all-features"
import LevelUpCTASection from "../sections/level-up-cta"
import TradingSoftwareSection from "../sections/trading-software"

export default function Features() {
  return (
    <LandingPageLayout>
      <HeroSection extraClsName="light-bk"/>
      <AllFeatures />
      <LevelUpCTASection />
      <TradingSoftwareSection />
    </LandingPageLayout>
  )
}
