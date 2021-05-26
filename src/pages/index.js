import React from "react"
import { graphql } from 'gatsby'
import LandingPageLayout from "../layouts/LandingPageLayout"
import HeroSection from "../sections/hero"
import ExchangeSection from "../sections/exchanges"
import BenefitSection from "../sections/benefit"
import FeaturesListSection from "../sections/features-list"
import ReviewsSection from "../sections/reviews/Reviews"
import CoinCryptorSection from "../sections/coin-cryptor"
import PeopleSayingSection from "../sections/people-saying"
import PeopleSayingSection2 from "../sections/people-saying2"
import FeatureCTASection from "../sections/feature-cta"
import PeopleSayingSection3 from "../sections/people-saying3"
import BestCryptorSection from "../sections/best-cryptor"
import LevelUpCTASection from "../sections/level-up-cta"
import TradingSoftwareSection from "../sections/trading-software"

export default function Home({data}) {
  const exchangeData = data.allPrismicExchange.nodes[2].dataRaw.exchange_item

  const benefitSectionData = data.allPrismicExchange.nodes[0].dataRaw.exchange_item
  const heroSectionData = data.allPrismicHeroSection.nodes[0].data

  const benefitTitle = data.allPrismicSection.nodes[2].data.title
  const benefitContent = data.allPrismicSection.nodes[2].data.content

  const featuresListSectionTitle = data.allPrismicSection.nodes[0].data.title
  const featuresListSectionContent = data.allPrismicSection.nodes[0].data.content
  const featuresListData = data.allPrismicFeatureSection.nodes[0].data.feature_item

  const reviewsData = data.allPrismicTrustpilotReviews.nodes[0].data

  const testimonials1 = data.allPrismicTestimonial.nodes[1].data
  const testimonials2 = data.allPrismicTestimonial.nodes[0].data
  const benoistTestimonial = data.prismicBenoistTestimonial.data

  const bestCryptorSectionTitle = data.allPrismicSection.nodes[1].data.title
  const bestCryptorSectionContent = data.allPrismicSection.nodes[1].data.content
  const bestCryptorSectionData = data.allPrismicBlogList.nodes[0].data.blog_item

  const softwareListData = data.allPrismicSoftwareList.nodes[0].data
  
  return (
    <LandingPageLayout navData={data.allPrismicExchange.nodes}>
      <HeroSection heroSectionData={heroSectionData}/>
      <ExchangeSection exchangeData={exchangeData}/>
      <BenefitSection 
        title={benefitTitle}
        content={benefitContent}
        benefitSectionData={benefitSectionData}
      />
      <FeaturesListSection 
        title={featuresListSectionTitle}  
        content={featuresListSectionContent}
        featuresListData={featuresListData}
      />
      <ReviewsSection {...reviewsData}/>
      <CoinCryptorSection />
      <PeopleSayingSection {...testimonials1}/>
      <PeopleSayingSection2 {...testimonials2}/>
      <FeatureCTASection />
      <PeopleSayingSection3 {...benoistTestimonial}/>
      <BestCryptorSection 
        title={bestCryptorSectionTitle}
        content={bestCryptorSectionContent}
        data={bestCryptorSectionData}/>
      <LevelUpCTASection />
      <TradingSoftwareSection {...softwareListData}/>
    </LandingPageLayout>
  )
}

export const query = graphql`
query Home {
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
  allPrismicHeroSection {
    nodes {
      data {
        content
        description
        header
        kicker
        img {
          url
        }
      }
    }
  }
  allPrismicSection {
    nodes {
      data {
        content
        title
      }
    }
  }
  allPrismicFeatureSection {
    nodes {
      data {
        feature_item {
          content
          img {
            url
          }
          kicker
          title
        }
      }
    }
  }
  allPrismicTrustpilotReviews {
    nodes {
      data {
        content
        title
        review_item {
          marks
          review
          username
        }
      }
    }
  }
  allPrismicTestimonial {
    nodes {
      data {
        content
        title
        testimonial {
          content1
          title1
          img {
            url
          }
        }
      }
    }
  }
  prismicBenoistTestimonial {
    data {
      content
      position
      testimonial
      title
      username
      img {
        url
      }
    }
  }
  allPrismicBlogList {
    nodes {
      data {
        blog_item {
          color
          content
          date
          title
          type
          img {
            url
          }
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
