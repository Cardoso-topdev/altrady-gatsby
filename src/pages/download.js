import React from 'react';
import LandingPageLayout from '../layouts/LandingPageLayout';
import DownloadHeroSection from '../sections/download-hero';
import DownloadTradingSoftwareSection from '../sections/download-trading-software';
import FeatureCTASection from '../sections/feature-cta';
import { graphql } from 'gatsby'

const Download = ({data}) => {
  return (
    <LandingPageLayout navData={data.allPrismicExchange.nodes}>
      <DownloadHeroSection />
      <DownloadTradingSoftwareSection />
      <FeatureCTASection />
    </LandingPageLayout>
  );
};

export const query = graphql`
query Download {
  allPrismicExchange {
    nodes {
      dataRaw {
        exchange_item {
          content
          exc_img {
            url
          }
          title
        }
      }
    }
  }
}
`
export default Download;