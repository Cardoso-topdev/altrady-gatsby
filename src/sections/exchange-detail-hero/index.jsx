import React from 'react';
import GotoBtn from '../../components/common/GotoBtn';
import {
  Binance 
} from "../../utils/imgLoader"
import "../style.scss"

const exchangeData = {
  imgSrc:Binance,
  title:`Binance`,
  tags:[
    {
      tagName:"Spot",
      clsName: "active"
    },
    {
      tagName:"Futures",
      clsName: "active"
    },
    {
      tagName:"Margin *",
      clsName: ""
    }
  ],
  content:`Binance is probably the best fiat cryptocurrency exchange for beginners and is the world's largest exchange, according to CoinMarketCap. Binance is a good option if you want to use it for day trading. Trade Bitcoin and Altcoin on Binance. Altrady your best crypto trading platform choice for Binance!`,
  markets:1214,
  coins:358,
  volume: "$70,375,087,669"
}
const ExchangeDetailHeroSection = () => {
  const {imgSrc, title, tags, content, markets, coins, volume} = exchangeData
  
  return (
    <section className={"section hero exchange-detail"}>
      <div className="layout-container">
      <div className="row item">
        <div className="col-lg-6">
          <div className="item-name d-flex">
            <img alt={title} src={imgSrc} className="item__img" />
            <h3 className="item_title">{title}</h3>
          </div>
          <p className="item__content">{content}</p>
          <div className="tags d-flex">
            {tags.map( ({tagName, clsName}, idx) => (
              <p className={"caption item__tag " + clsName} key={idx}>{tagName}</p>
            ) )}
          </div>
          <div className="item-detail d-flex">
            <div className="item-detail__col">
              <p className="caption">Markets:</p>
              <h4 className="item-detail__markets">{markets}</h4>
            </div>
            <div className="item-detail__col">
              <p className="caption">Coins:</p>
              <h4 className="item-detail__markets">{coins}</h4>
            </div>
            <div className="item-detail__col">
              <p className="caption">24h Volume:</p>
              <h4 className="item-detail__markets">{volume}</h4>
            </div>
          </div>
          <GotoBtn to="/" clsName="btn-goto">Go to {title}</GotoBtn>
          <p className="caption color-dark-tertiary">* - not supported in Altrady</p>
        </div>

        <div className="col-lg-6">
          <div className="hero-img-container img-container">
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ExchangeDetailHeroSection;