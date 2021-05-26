import React from 'react';
import NavDropdownFeatureColumn from './NavDropdownFeatureColumn';
import { 
  CryptoBaseScannerBitcoin,
  CryptoQuickScanner,
  Coindelist,
  Coinredact,
  Coinray,
  TradingAnalytics,
  Support,
  Binance,
  Bittrex,
  Hitbtc,
  Kucoin,
  Okex
} from "../../utils/imgLoader"

const navDropdownResourcesData = [
  {
    title: "Why Altrady?",
    content: "Act fast with real-time market updates.",
    imgSrc: TradingAnalytics
  },
  {
    title: "Crypto Trading Academy",
    content: "Learn how to quickly start trading with Altrady.",
    imgSrc: TradingAnalytics
  },
  {
    title: "Product roadmap",
    content: "See upcoming, planned and released features.",
    imgSrc: TradingAnalytics
  },
  {
    title: "Altrady vs Coinigy",
    content: "Compare",
    imgSrc: TradingAnalytics
  },
  {
    title: "Blog",
    content: "Read and learn about the crypto world.",
    imgSrc: TradingAnalytics
  },
  {
    title: "Documentation",
    content: "Technical information about the features.",
    imgSrc: TradingAnalytics
  },
  {
    title: "Support",
    content: "Ask question about the application.",
    imgSrc: Support
  }
]

const navDropdownPartnersData = [
  {
    title: "Crypto Base Scanner",
    content: "QFL scanner",
    imgSrc: CryptoBaseScannerBitcoin
  },
  {
    title: "Crypto Quick Scanner",
    content: "Quick drop & rise alerts",
    imgSrc: CryptoQuickScanner
  },
  {
    title: "Coindelist",
    content: "Get notified when coins are being delisted",
    imgSrc: Coindelist
  },
  {
    title: "Coinredact",
    content: "Crypto news",
    imgSrc: Coinredact
  },
  {
    title: "CoinRay",
    content: "Multiple exchanges, one data stream API",
    imgSrc: Coinray
  }
]

const navDropdownExchangesData = [
  {
    title: "Binance",
    imgSrc: Binance
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
  },
  {
    title: "OKEx",
    imgSrc: Okex
  }
]

const NavResourcesTab = () => {
  return (
    <div className="dropdown-content resource-tab">
      <div className="layout-container">
        <div className="row">
          <NavDropdownFeatureColumn 
            title="Resources"
            content={navDropdownResourcesData}
          />
          <NavDropdownFeatureColumn 
            title="Partners"
            content={navDropdownPartnersData}
          />
          <NavDropdownFeatureColumn 
            title="Partner exchanges"
            content={navDropdownExchangesData}
          />
        </div>
      </div>
    </div>
  );
};

export default NavResourcesTab;