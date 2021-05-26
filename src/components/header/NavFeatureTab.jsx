import React from 'react';
import NavDropdownFeatureColumn from './NavDropdownFeatureColumn';
import { 
  RealtimeMarketData,
  MultiExchange,
  CryptobaseScanner,
  QuickScanner,
  MultiCharts,
  WebTrading,
  SmartTrading,
  ScaledLadders,
  PositionTracker,
  BasicOrderTypes,
  Hotkeys,
  TradingAnalytics,
  BrakEvenCalculator,
  Portfolio,
  Hournaling
} from "../../utils/imgLoader"
import { Link } from 'gatsby';

const navDropdownFeatureDiscoverData = [
  {
    title: "Real-time market data",
    content: "Act fast with real-time market updates.",
    imgSrc: RealtimeMarketData
  },
  {
    title: "Multi-exchange",
    content: "One play to trade on all your exchanges.",
    imgSrc: MultiExchange
  },
  {
    title: "Crypto Base Scanner",
    content: "Base trading strategy scanner.",
    imgSrc: CryptobaseScanner
  },
  {
    title: "Quick scanner",
    content: "Get notified when there is a sudden drop or rise.",
    imgSrc: QuickScanner
  },
  {
    title: "Multi-charts",
    content: "Multiple charts on the same screen.",
    imgSrc: MultiCharts
  },
  {
    title: "Web trading",
    content: "Trade anywhere from your browser.",
    imgSrc: WebTrading
  }
]
const navDropdownFeatureExecuteData = [
  {
    title: "Smart trading",
    content: "Automate your trading with smart features.",
    imgSrc: SmartTrading
  },
  {
    title: "Scaled ladders",
    content: "Create multiple order at the same time.",
    imgSrc: ScaledLadders
  },
  {
    title: "Position tracker",
    content: "Your trading progress right next to the terminal.",
    imgSrc: PositionTracker
  },
  {
    title: "Basic order tpyes",
    content: "Market, Limit, Stop limit orders",
    imgSrc: BasicOrderTypes
  },
  {
    title: "Hotkeys",
    content: "Execute trades faster with keyboard shortcuts",
    imgSrc: Hotkeys
  }
]
const navDropdownFeatureAnalyzeData = [
  {
    title: "Trading analytics",
    content: "Determine efficiency of your trading strategy.",
    imgSrc: TradingAnalytics
  },
  {
    title: "Break even calculator",
    content: "Instantly see your profit margin for a particular market.",
    imgSrc: BrakEvenCalculator
  },
  {
    title: "Portfolio",
    content: "Manage your cryptocurrency assets with ease.",
    imgSrc: Portfolio
  },
  {
    title: "Journaling",
    content: "Keep track of your thoughts about a market.",
    imgSrc: Hournaling
  }
]
const NavFeatureTab = () => {
  return (
    <div className="dropdown-content">
      <div className="layout-container">
        <div className="row">
          <NavDropdownFeatureColumn 
            title="Discover"
            content={navDropdownFeatureDiscoverData}
          />
          <NavDropdownFeatureColumn 
            title="Execute"
            content={navDropdownFeatureExecuteData}
          />
          <NavDropdownFeatureColumn 
            title="Analyze"
            content={navDropdownFeatureAnalyzeData}
          />
        </div>
        <div className="action-wrapper">
          <Link to="/features" className="view-all link-non-effect">
            <p className="view-all-feature text-link">View all features</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavFeatureTab;