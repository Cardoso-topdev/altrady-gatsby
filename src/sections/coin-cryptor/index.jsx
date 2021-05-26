import React from 'react';
import LinkPrimaryBtn from '../../components/common/LinkPrimaryBtn';

const title = `Bitcoin or Altcoins Crypto Trading Software. 14 Days for 
Free!`
const description = `Put your trading performance to the next level.`
const CoinCryptorSection = () => {
  return (
    <div className="section-cta">
      <h2 className="title">{title}</h2>
      <p className="lead-text">{description}</p>
      <LinkPrimaryBtn>Try for free</LinkPrimaryBtn>
    </div>
  );
};

export default CoinCryptorSection;