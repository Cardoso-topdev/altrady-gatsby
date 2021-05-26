import React from 'react';
import LandingPageLayout from '../layouts/LandingPageLayout';
import DownloadHeroSection from '../sections/download-hero';
import DownloadTradingSoftwareSection from '../sections/download-trading-software';
import FeatureCTASection from '../sections/feature-cta';

const Download = () => {
  return (
    <LandingPageLayout>
      <DownloadHeroSection />
      <DownloadTradingSoftwareSection />
      <FeatureCTASection />
    </LandingPageLayout>
  );
};

export default Download;