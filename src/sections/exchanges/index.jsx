import React from 'react';
import ExchangeItem from '../../components/header/ExchangeItem';
import SectionLayout from '../../layouts/SectionLayout';
import {
  Binance,
  Huobi,
  Bittrex,
  Hitbtc,
  Kucoin,
  CoinbasePro,
  Kraken,
  Poloniex,
  Okex
} from "../../utils/imgLoader"

const exchangesData1 = [
  {
    title: "Binance",
    imgSrc: Binance
  },
  {
    title: "Huobi",
    imgSrc: Huobi
  },
  {
    title: "Bittrex",
    imgSrc: Bittrex
  },
  {
    title: "HitBTC",
    imgSrc: Hitbtc
  },
  {
    title: "KuCoin",
    imgSrc: Kucoin
  }
]
const exchangesData2 = [
  {
    title: "Coinbase Pro",
    imgSrc: CoinbasePro
  },
  {
    title: "Kraken",
    imgSrc: Kraken
  },
  {
    title: "Poloniex",
    imgSrc: Poloniex
  },
  {
    title: "OKEx",
    imgSrc: Okex
  }
]
const ExchangeSection = ({extraCls = "", exchangeData}) => {
  return (
    <SectionLayout sectionName={"exchanges " + extraCls}>
      <div className="exchanges-item__container">
        <div className="first-line d-flex row">
          {exchangeData?.map(({ title, exc_img }, idx) =>
            <ExchangeItem
              title={title}
              key={idx}
              imgSrc={exc_img.url}
              extraCls=" width-sm-20"
            />
          )}
        </div>
      </div>
    </SectionLayout>
  );
};

export default ExchangeSection;