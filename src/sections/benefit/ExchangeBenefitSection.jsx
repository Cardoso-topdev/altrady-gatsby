import React from 'react';
import BenefitItem from '../../components/benefit/item';
import SectionHeader from '../../components/common/SectionHeader';
import SectionLayout from '../../layouts/SectionLayout';
import {
  RealtimeMarketData
} from "../../utils/imgLoader"

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
const ExchangeBenefitSection = () => {
  return (
    <SectionLayout sectionName="benefit">
      <SectionHeader
        title="Binance Exchange Benefits"
        content={benefitContent}
        />
      <div className="row item-container">
        {benefitSectionData.map( (item, idx) => <BenefitItem 
          key={idx}
          {...item} />)}
      </div>
    </SectionLayout>
  );
};

export default ExchangeBenefitSection;