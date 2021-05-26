import React from "react"
import { graphql } from 'gatsby'
import LandingPageLayout from "../layouts/LandingPageLayout"
import HeroSection from "../sections/hero"
import AllFeatures from "../sections/all-features"
import LevelUpCTASection from "../sections/level-up-cta"
import TradingSoftwareSection from "../sections/trading-software"

export default function Features({data}) {
  const softwareListData = data.allPrismicSoftwareList.nodes[0].data

  return (
    <LandingPageLayout
      navData={data.allPrismicExchange.nodes}>
      <HeroSection extraClsName="light-bk"/>
      <AllFeatures />
      <LevelUpCTASection />
      <TradingSoftwareSection {...softwareListData}/>
    </LandingPageLayout>
  )
}

export const query = graphql`
query Features {
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
  allPrismicSoftwareList {
    nodes {
      data {
        title
        software_item {
          cta_text
          img {
            url
          }
          os
          os_description
        }
      }
    }
  }
}
`