import React from 'react';
import SectionHeader from '../../components/common/SectionHeader';
import SectionLayout from '../../layouts/SectionLayout';
import ExchangeSection from '../exchanges';

const title = `Trading Tool & Features For Better Trading`
const subTitle = `Trading Terminal for Different Exchanges`
const content1 = `Spread your risks and multiply your opportunities by trading on different crypto exchanges. With Altrady, you can 
trade on the following exchanges without any hassle at all:`
const content2 = `Setup your integrations by connecting Altrady to your exchange platform through API.`

const TradingToolSection = () => {
  return (
    <SectionLayout sectionName="trading-software">
      <SectionHeader
        title={title} />
      
      <div className="trading-software__content">
        <h4 className="content__sub-title">
          {subTitle}
        </h4>
        <p className="lead-text content1">{content1}</p>
        <p className="lead-text content2">{content2}</p>
      </div>

      <ExchangeSection extraCls="bk-color-white trading"/>
    </SectionLayout>
  );
};

export default TradingToolSection;