import React from 'react';
import LinkNormalBtn from '../../components/common/LinkNormalBtn';

const title = `Take Advantage Of The Fastest Crypto Trading Tool`
const description = `Suitable For Day Trading or Automated Trading`
const TradeNowCTA = () => {
  return (
    <div className="section-cta cryptor-trading-tool">
      <h2 className="title">{title}</h2>
      <p className="lead-text">{description}</p>
      <LinkNormalBtn>Trade now with Altrady</LinkNormalBtn>
    </div>
  );
};

export default TradeNowCTA;