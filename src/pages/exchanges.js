import React from "react"
import { graphql } from 'gatsby'
import LandingPageLayout from "../layouts/LandingPageLayout"
import ExchangeHeroSection from "../sections/exchange-hero"
import SupportedExchangeSection from "../sections/supported-exchange"
import LevelUpCTASection from "../sections/level-up-cta"
import TradingSoftwareSection from "../sections/trading-software"
import UpcomingSupportSection from "../sections/upcoming-support"

export default function Exchanges({data}) {
  const softwareListData = data.allPrismicSoftwareList.nodes[0].data
  return (
    <LandingPageLayout navData={data.allPrismicExchange.nodes}>
      <ExchangeHeroSection extraClsName="light-bk"/>
      <SupportedExchangeSection />
      <UpcomingSupportSection />
      <LevelUpCTASection />
      <TradingSoftwareSection {...softwareListData}/>
    </LandingPageLayout>
  )
}

export const query = graphql`
query Exchanges {
  allPrismicExchange {
    nodes {
      data {
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