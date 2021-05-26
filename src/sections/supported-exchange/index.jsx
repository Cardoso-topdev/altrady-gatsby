import React from 'react';
import SectionHeader from '../../components/common/SectionHeader';
import ExchangesListItem from '../../components/exchanges-list-item';
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

const sectionContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
magna aliqua. Integer enim neque volutpat ac tincidunt vitae semper quis.`
const exchangesData = [
  {
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
  },
  {
    imgSrc:Huobi,
    title:`Huobi`,
    tags:[
      {
        tagName:"Spot",
        clsName: "active"
      },
      {
        tagName:"Margin *",
        clsName: ""
      },
      {
        tagName:"Options *",
        clsName: ""
      }
    ],
    content:`Huobi is a leading global digital asset exchange, offers support for many altcoins and a large variety of stablecoins. Is part of Huobi Global which also has the world's first autonomous token listing exchange - HADAX (Huobi Autonomous Digital Asset Exchange) Trade Bitcoins and Altcoins on Huobi. Altrady, the Best Crypto Trading Platform for Huobi!`,
    markets:962,
    coins:326,
    volume: "$70,375,087,669"
  },
  {
    imgSrc:Bittrex,
    title:`Bittrex`,
    tags:[
      {
        tagName:"Spot",
        clsName: "active"
      },
      {
        tagName:"Margin *",
        clsName: ""
      },
      {
        tagName:"Options *",
        clsName: ""
      }
    ],
    content:`Bittrex is one of the largest and most trusted cryptocurrency exchanges in the world. The creators have extensive experience in security for dominant platforms like Amazon and Microsoft. Trade Bitcoin and Altcoin on Bittrex. Altrady, your Top Crypto Trading Platform for Bittrex!`,
    markets:732,
    coins:358,
    volume: "$70,375,087,669"
  },
  {
    imgSrc:Hitbtc,
    title:`HitBTC`,
    tags:[
      {
        tagName:"Spot",
        clsName: "active"
      },
      {
        tagName:"Margin *",
        clsName: ""
      }
    ],
    content:`HitBTC is a cryptocurrency exchange established in late 2013. It is adequate for the advanced cryptocurrency traders interested in trading altcoins. Trade Bitcoin and Altcoins on HitBTC. Altrady, your top crypto trading platform for HitBTC!`,
    markets:1040,
    coins:488,
    volume: "$70,375,087,669"
  },
  {
    imgSrc:Kucoin,
    title:`KuCoin`,
    tags:[
      {
        tagName:"Spot",
        clsName: "active"
      },
      {
        tagName:"Margin *",
        clsName: ""
      },
      {
        tagName:"Futures",
        clsName: ""
      }
    ],
    content:`KuCoin is an exclusively crypto-to-crypto exchange that has been receiving a lot of traction in the last time. Has over 150 cryptocurrencies, 400 markets. Trade Bitcoin on KuCoin. Altrady, the Most Advanced Crypto Trading Platform for KuCoin!`,
    markets:738,
    coins:321,
    volume: "$70,375,087,669"
  },
  {
    imgSrc:CoinbasePro,
    title:`Coinbase Pro`,
    tags:[
      {
        tagName:"Spot",
        clsName: "active"
      },
      {
        tagName:"Margin *",
        clsName: ""
      },
      {
        tagName:"Options *",
        clsName: ""
      }
    ],
    content:`Coinbase Pro Exchange (formerly known as GDAX) is one of the largest crypto exchanges in the United States. It is owned and operated by popular cryptocurrency exchange Coinbase. It is meant for more experienced traders and allows a range of advanced, high-volume trades. Trade Bitcoin on Coinbase Pro. Altrady, your Best Crypto Trading Platform for Coinbase Pro!`,
    markets:197,
    coins:63,
    volume: "$70,375,087,669"
  },
  {
    imgSrc:Kraken,
    title:`Kraken`,
    tags:[
      {
        tagName:"Spot",
        clsName: "active"
      },
      {
        tagName:"Margin *",
        clsName: ""
      },
      {
        tagName:"Options*",
        clsName: ""
      }
    ],
    content:`Kraken is one of the largest and oldest cryptocurrency exchanges. A great feature is that you can trade in both cryptocurrencies and fiat currencies. Kraken is a useful platform for both experts and beginner's crypto traders. Trade Bitcoins and Altcoins on Kraken. Altrady, your All-In-One Crypto Trading Platform for Kraken!`,
    markets:285,
    coins:62,
    volume: "$70,375,087,669"
  },
  {
    imgSrc:Poloniex,
    title:`Poloniex`,
    tags:[
      {
        tagName:"Spot",
        clsName: "active"
      },
      {
        tagName:"Margin *",
        clsName: ""
      },
      {
        tagName:"Options *",
        clsName: ""
      }
    ],
    content:`Poloniex offers quality service when it comes to trading bitcoin and altcoins. It provides the lowest fees in the industry. Identity verification is 100% optional, only asks for your email during registration. Trade Bitcoin on Poloniex. Altrady, the Most Simple Crypto Trading Platform for Poloniex!`,
    markets:326,
    coins:193,
    volume: "$70,375,087,669"
  },
  {
    imgSrc:Okex,
    title:`OKEx`,
    tags:[
      {
        tagName:"Spot",
        clsName: "active"
      },
      {
        tagName:"Margin *",
        clsName: ""
      },
      {
        tagName:"Options *",
        clsName: ""
      }
    ],
    content:`OKEx cryptocurrency exchange provides services in over 100 countries, offers fiat-to-fiat and crypto-to-fiat trading, futures trading, and wallet options all in one place. Trade Bitcoin on OKEx. Altrady, the Most Simple Crypto Trading Platform for OKEx!`,
    markets:708,
    coins:254,
    volume: "$70,375,087,669"
  },
  {
    imgSrc:Binance,
    title:`Binance US`,
    tags:[
      {
        tagName:"Spot",
        clsName: "active"
      },
      {
        tagName:"Margin *",
        clsName: ""
      },
      {
        tagName:"Options *",
        clsName: ""
      }
    ],
    content:`Binance is probably the best fiat cryptocurrency exchange for beginners and is the world's largest exchange, according to CoinMarketCap. Binance is a good option if you want to use it for day trading. Trade Bitcoin and Altcoin on Binance. Altrady your best crypto trading platform choice for Binance!`,
    markets:109,
    coins:54,
    volume: "$70,375,087,669"
  }
]

const SupportedExchangeSection = () => {
  return (
    <SectionLayout sectionName="supported-exchange">
      <SectionHeader 
        title="Supported exchanges"
        content={sectionContent}
      />

      <div className="row exchanges-list">
        {exchangesData.map( (item, idx) => (
          <ExchangesListItem {...item} key={idx} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default SupportedExchangeSection;