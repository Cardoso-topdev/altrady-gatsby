import React from "react"
import { graphql } from 'gatsby'
import LandingPageLayout from "../layouts/LandingPageLayout"
import AnnualPlanSection from "../sections/annual-plan"
import FAQSection from "../sections/faq"
import FeatureCTASection from "../sections/feature-cta"
import PeopleSayingSection from "../sections/people-saying"
import PricingHero from "../sections/pricing-hero"

export default function Pricing({data}) {
  const testimonials1 = data.allPrismicTestimonial.nodes[1].data
  return (
    <LandingPageLayout navData={data.allPrismicExchange.nodes}>
      <PricingHero />
      <AnnualPlanSection />
      <FAQSection />
      <FeatureCTASection />
      <PeopleSayingSection {...testimonials1}/>
    </LandingPageLayout>
  )
}

export const query = graphql`
query Pricing {
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
}
`