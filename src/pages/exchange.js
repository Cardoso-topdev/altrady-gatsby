import React from 'react'
import LandingPageLayout from '../layouts/LandingPageLayout'
import ExchangeDetailHeroSection from '../sections/exchange-detail-hero'
import BenefitSection from "../sections/benefit"
import {
  RealtimeMarketData
} from "../utils/imgLoader"
import FeaturesListSection from '../sections/features-list'
import LevelUpCTASection from '../sections/level-up-cta'
import TradingSoftwareSection from '../sections/trading-software'
import { graphql } from 'gatsby'

const benefitTitle = "Binance Exchange Benefits"
const benefitContent= `With Altrady, you are at a huge advantage!
Our tools and technology give you the easiest way to manage your trades and portfolio.`
const benefitSectionData = [
  {
    title: "Liquidity",
    content: `You can get in and out of coins fast at reasonable prices.`,
    imgSrc: RealtimeMarketData
  },
  {
    title: "Mobile application",
    content: `iPhone and Android mobile applications are available`,
    imgSrc: RealtimeMarketData
  },
  {
    title: "Lowest fees",
    content: `Altrady uses state-of-the-art encryption to safely store you API keys on the servers.`,
    imgSrc: RealtimeMarketData
  },
  {
    title: "Regulated and FDIC insuded exchange",
    content: `Customize your dashboard and configure alerts based on your trading goals and strategies.`,
    imgSrc: RealtimeMarketData
  },
  {
    title: "Security",
    content: `Multi-layered approach and clustering technique for a higher security`,
    imgSrc: RealtimeMarketData
  },
  {
    title: "Fast verification",
    content: `Allows you to trade almost instantly with just an email address`,
    imgSrc: RealtimeMarketData
  },
]

const featuresListTitle = "Make Binance even better with following Altrady features"
const featuresListContent = `With Altrady, you are at a huge advantage!
Our tools and technology give you the easiest way to manage your trades and portfolio.`
const Exchange = ({data}) => {
  const softwareListData = data.allPrismicSoftwareList.nodes[0].data
  return (
    <LandingPageLayout navData={data.allPrismicExchange.nodes}>
      <ExchangeDetailHeroSection />
      <BenefitSection 
        title={benefitTitle}
        content={benefitContent}
        benefitSectionData={benefitSectionData}
      />
      <FeaturesListSection
        title={featuresListTitle}
        content={featuresListContent}
      />
      <LevelUpCTASection />
      <TradingSoftwareSection {...softwareListData}/>
    </LandingPageLayout>
  )
}

export const query = graphql`
query Exchange {
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

export default Exchange