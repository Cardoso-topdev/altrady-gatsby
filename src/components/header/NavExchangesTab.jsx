import React from 'react';
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
import ExchangeItem from './ExchangeItem';
import { Link } from 'gatsby';

const navDropdownExchangeData1 = [
  {
    title: "Binance",
    content: "24h volume: $37,822M",
    imgSrc: Binance
  },
  {
    title: "Huobi",
    content: "24h volume: $10,939M",
    imgSrc: Huobi
  },
  {
    title: "Bittrex",
    content: "24h volume: $268M",
    imgSrc: Bittrex
  },
  {
    title: "HitBTC",
    content: "24h volume: $3,088M",
    imgSrc: Hitbtc
  },
  {
    title: "KuCoin",
    content: "24h volume: $1,488M",
    imgSrc: Kucoin
  }
]

const navDropdownExchangeData2 = [
  {
    title: "Coinbase Pro",
    content: "24h volume: $4,475M",
    imgSrc: CoinbasePro
  },
  {
    title: "Kraken",
    content: "24h volume: $1,918M",
    imgSrc: Kraken
  },
  {
    title: "Poloniex",
    content: "24h volume: $256M",
    imgSrc: Poloniex
  },
  {
    title: "OKEx",
    content: "24h volume: $8,320M",
    imgSrc: Okex
  },
  {
    title: "Binance US",
    content: "24h volume: $1,117M",
    imgSrc: Binance
  }
]

const NavExchangesTab = ({exchangeData}) => {
  return (
    <div className="dropdown-content">
      <div className="layout-container">
        <div className="nav-col">
          <h4 className="title">
            Supported exchanges
          </h4>
          <div className="exchange row">
            {exchangeData?.map( (item, idx) => (
              <ExchangeItem 
                title={item.title}
                content={item.content}
                imgSrc={item.exc_img.url}
                extraCls=" width-lg-20 col-sm-6"
                key={idx}
              />
            ))}
          </div>
        </div>
        <div className="action-wrapper">
          <Link to="/exchanges" className="view-all link-non-effect">
            <p className="view-all-feature text-link">View all exchanges</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavExchangesTab;