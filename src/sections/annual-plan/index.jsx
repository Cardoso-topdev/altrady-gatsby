import React, { useState } from 'react';
import SectionHeader from '../../components/common/SectionHeader';
import SectionLayout from '../../layouts/SectionLayout';
import AnnualHeaderItem from './AnnualHeaderItem';
import AnnualRow from './AnnualRow';
import LinkPrimaryBtn from '../../components/common/LinkPrimaryBtn';

const title = `Get 30% Discount with our Annual Plan`
const content = `To support the global trading community, we are offering special discounts for Annual plan.`
const annualHeaderData = [
  {
    type:"Basic",
    percentage: "-30%",
    currentPrice: "€10.46",
    reducedPrice: "~$12.55",
    oldPrice: "€14.95"
  },
  {
    type:"Essential",
    percentage: "-30%",
    currentPrice: "€20.96",
    reducedPrice: "~$25.15",
    oldPrice: "€29.95"
  },
  {
    type:"Premium",
    percentage: "-30%",
    currentPrice: "€31.46",
    reducedPrice: "~$37.75",
    oldPrice: "€14.95"
  }
]
const annualOptions = [
  {
    title:`Signals`,
    description: `Crypto Base Scanner signals on ApexTrader, Le-Trader, Nefertiti, Zignaly`
  },
  {
    title:`Trading Terminal`,
    description: `Trade on several exchanges from our powerful trading terminal.`
  },
  {
    title:`Portfolio`,
    description: `Manage your assets with historic and current portfolio data`
  },
  {
    title:`Trading Analytics`,
    description: `Analyze your trading performance and get PNL for all your exchanges and markets`
  },
  {
    title:`Multi Charts`,
    description: `Open multiple charts on the same screen`
  },
  {
    title:`Custom Alerts`,
    description: `You can setup your custom alerts.`
  },
  {
    title:`Position Tracker`,
    description: `Analyze your trading performance and get PNL for all your exchanges and markets`
  },
  {
    title:`Break Even Calculator`,
    description: `Instantly see your profit margin and know your break-even point for a particular market.`
  },
  {
    title:`Basic Order Types`,
    description: `Market, Limit and Stop Limit orders.`
  },
  {
    title:`Base Scanner`,
    description: `Fully integrated Crypto Base Scanner with all current bases and push notifications`
  },
  {
    title:`Quick Scanner`,
    description: `Market Scanner to find fast up or down price action, including the Fat Finger Scanner.`
  },
  
]

const advancedTradingData = [
  {
    title : `Limit Ladder Order`,
    description : `Ladders make it possible to create multiple orders at the same time.`
  },
  {
    title : `One-Cancel-the-Other Order`,
    description : `An OCO order often combines a stop order with a limit order.`
  }
]

const smartOrdersData = [
  {
    title : `Take profit`,
    description : `It is a standing order that is placed by specifying a certain price point above the purchase price so that you could sell coins during a quick rise in price and thereby make a profit from it.`
  },
  {
    title : `Trailing stop`,
    description : `Trailing stop order can maximize your returns and minimize your losses. It is designed to protect your crypto gains by enabling a trade to remain open and continue generating profits during favorable market conditions.`
  }
]
const AnnualPlanSection = () => {
  const [isAnnual, setIsAnnual] = useState(true)
  return (
    <SectionLayout sectionName="annual">
      <SectionHeader
        title={title}
        content={content} />
      
      <div className="annual-header">
        <div className="plan-tab d-flex">
          <div className={isAnnual ? "plan-tab__item active" : "plan-tab__item"} onClick={() => setIsAnnual(true)}>Annual (-30%)</div>
          <div className={isAnnual ? "plan-tab__item" : "plan-tab__item active"} onClick={() => setIsAnnual(false)}>Monthly</div>
        </div>
        <div className="row">
          <div className="sticky col-lg-12">
            <div className="row">
              <div className="col-lg-3 tablet-hide"></div>
              {annualHeaderData.map( (item, idx) => <AnnualHeaderItem {...item} key={idx}/>)}
            </div>
          </div>

          {annualOptions.map( (item, idx) => (
            <AnnualRow {...item} key={idx} />
          ))}

          <div className="col-lg-12 plan-type">Advanced trading:</div>
          {advancedTradingData.map( (item, idx) => (
            <AnnualRow {...item} key={idx} />
          ))}
          
          <div className="col-lg-12 plan-type">Smart orders:</div>
          {smartOrdersData.map( (item, idx) => (
            <AnnualRow {...item} key={idx} />
          ))}
         
        </div>

        <div className="row phone-hide">
          <div className="col-lg-3 tablet-hide" ></div>
          <div className="col-lg-3 col-sm-4 col-4 btn-container">
            <LinkPrimaryBtn>14-days free trial</LinkPrimaryBtn>
          </div>
          <div className="col-lg-3 col-sm-4 col-4 btn-container">
            <LinkPrimaryBtn>14-days free trial</LinkPrimaryBtn>
          </div>
          <div className="col-lg-3 col-sm-4 col-4 btn-container">
            <LinkPrimaryBtn>14-days free trial</LinkPrimaryBtn>
          </div>
        </div>

        <div className="row phone-show">
          <div className="col-lg-3 col-sm-4 col-4 btn-container">
            <LinkPrimaryBtn>Try now</LinkPrimaryBtn>
          </div>
          <div className="col-lg-3 col-sm-4 col-4 btn-container">
            <LinkPrimaryBtn>Try now</LinkPrimaryBtn>
          </div>
          <div className="col-lg-3 col-sm-4 col-4 btn-container">
            <LinkPrimaryBtn>Try now</LinkPrimaryBtn>
          </div>
        </div>

      </div>
      <div className="annual-content"></div>
    </SectionLayout>
  );
};

export default AnnualPlanSection;