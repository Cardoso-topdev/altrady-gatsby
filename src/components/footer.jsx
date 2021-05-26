import React from "react"

import { Link } from "gatsby"

import { BLogo, Facebook, Twitter, Discord, Telegram,   CryptoBaseScannerBitcoin,
  CryptoQuickScanner,
  Coindelist,
  Coinredact,
  Coinray,
} from "../utils/imgLoader"

const features = [
  "Multi-exchange",
  "Real-time market data",
  "Advanced trading",
  "Smart trading",
  "Trading analytics",
  "Positions with PnL",
  "Multi-charts",
  "Portfolio manager",
  "Crypto Base Scanner",
  "Custom layouts",
  "Quick Scan",
  "Notes",
  "News",
  "Watch lists",
]

const partners = [
  {
    title: "Crypto Base Scanner",
    content: "QFL scanner",
    imgSrc: CryptoBaseScannerBitcoin,
  },
  {
    title: "Crypto Quick Scanner",
    content: "Quick drop & rise alerts",
    imgSrc: CryptoQuickScanner,
  },
  {
    title: "Coindelist",
    content: "Get notified when coins are being delisted",
    imgSrc: Coindelist,
  },
  {
    title: "Coinredact",
    content: "Crypto news",
    imgSrc: Coinredact,
  },
  {
    title: "CoinRay",
    content: "Multiple exchanges, one data stream API",
    imgSrc: Coinray,
  },
]

const footer = ({exchangeData}) => {
  const featureList = features.map((item, index) => (
    <div key={index}>
      <Link to="/"> {item} </Link>
    </div>
  ))

  const exchangeList = exchangeData?.map((item, index) => (
    <div key={index} className="d-flex align-items-center">
      <img alt={item.title} src={item.exc_img.url} className="exchange-img" />
      <Link to="/">{item.title}</Link>
    </div>
  ))

  const partnerList = partners.map((item, index) => (
    <div key={index} className="feature-item ">
      <img alt={item.title} src={item.imgSrc} className="feature-item__image" />
      <div className="feature-item__content-wrapper">
        <Link to="/" className="feature-item_title">
          {item.title}
        </Link>
        <p className="label feature-item_content">{item.content}</p>
      </div>
    </div>
  ))

  return (
    <footer className="footer">
      <div className="layout-container">
        <div className="footer-navbar">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <h4>Features</h4>
              {featureList}
            </div>
            <div className="col-lg-3 col-sm-6 exchange">
              <h4>Exchanges</h4>
              {exchangeList}
            </div>
            <div className="col-lg-3 col-sm-6 partner">
              <h4>Partners</h4>
              {partnerList}
            </div>
            <div className="col-lg-3 col-sm-6 other">
              <h4>Links</h4>
              <div>
                <Link to="/">Blog</Link>
              </div>
              <div>
                <Link to="/pricing">Pricing</Link>
              </div>
              <div>
                <Link to="/">Crypto Academy</Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="bottom-bar">
          <Link to="/">
            <img alt="altrady logo" src={BLogo} />
          </Link>
          <div className="links">
            <div className="terms">
              <Link to="/terms">Terms & Conditions</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
            <div className="social-links">
              <a href="https://www.facebook.com">
                <img alt="Facebook Link" src={Facebook} />
              </a>
              <a href="https://twitter.com">
                <img alt="Twitter Link" src={Twitter} />
              </a>
              <a href="https://discord.com">
                <img alt="Discord Link" src={Discord} />
              </a>
              <a href="https://telegram.org">
                <img alt="Telegram Link" src={Telegram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer
