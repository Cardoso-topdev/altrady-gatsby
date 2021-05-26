import React from 'react';
import SectionHeader from '../../components/common/SectionHeader';
import UpcomingSupportItem from '../../components/upcoming-support-item';
import SectionLayout from '../../layouts/SectionLayout';
import {
  Bybit,
  Ftx
} from "../../utils/imgLoader"

const supportData = [
  {
    title: "ByBit",
    imgSrc: Bybit,
    content: `Binance is probably the best fiat cryptocurrency exchange for beginners and is the world's largest exchange, according to CoinMarketCap. Binance is a good option if you want to use it for day trading. Trade Bitcoin and Altcoin on Binance. Altrady your best crypto trading platform choice for Binance!`
  },
  {
    title: "FTX",
    imgSrc: Ftx,
    content: `Huobi is a leading global digital asset exchange, offers support for many altcoins and a large variety of stablecoins. Is part of Huobi Global which also has the world's first autonomous token listing exchange - HADAX (Huobi Autonomous Digital Asset Exchange) Trade Bitcoins and Altcoins on Huobi. Altrady, the Best Crypto Trading Platform for Huobi!`
  }
]
const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
magna aliqua. Integer enim neque volutpat ac tincidunt vitae semper quis.`
const UpcomingSupportSection = () => {
  return (
    <SectionLayout sectionName="upcoming-support light-bk">
      <SectionHeader
        title="Upcoming support on Altrady"
        content={content} />

      <div className="row section-body">
        {supportData.map( (item, idx) => (
          <UpcomingSupportItem {...item} key={idx} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default UpcomingSupportSection;