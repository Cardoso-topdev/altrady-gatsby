import React from 'react'
import BlogItem from '../../components/blog-item'
import { BlogImg } from "../../utils/imgLoader"

const heroData = [
  {
    title : `Best Candlestick Patterns`,
    content: ``,
    time: `May 6, 2021`,
    type: `Crypto Trading`,
    color: `green`,
    imgSrc: BlogImg
  },
  {
    title : `Best cryptocurrency trading terminals`,
    content: ``,
    time: `May 6, 2021`,
    type: `Crypto Trading`,
    color: `green`,
    imgSrc: BlogImg
  },
  {
    title : `Algorithmic Crypto Trading`,
    content: `Algorithmic crypto trading (also known as automatic trading, black-box trading, or algo-trading) is a method of placing trades that utilizes a computer program that follows a given series of instructions (an algorithm). In principle, the exchange will produce income more rapidly and frequently than any human trader can.`,
    time: `May 6, 2021`,
    type: `Crypto Strategy`,
    color: `red`,
    imgSrc: BlogImg
  },
  {
    title : `Best Crypto and Blockchain Games`,
    content: ``,
    time: `May 6, 2021`,
    type: `Cryptocurrency`,
    color: `pink`,
    imgSrc: BlogImg
  },
  {
    title : `Best Cryptocurrency Backtesting Platforms`,
    content: ``,
    time: `May 6, 2021`,
    type: `Crypto Strategy`,
    color: `red`,
    imgSrc: BlogImg
  }
]
const BlogHeroSection = () => {
  return (
    <div className="blog-section section-hero blog-item-container">
      <div className="row">
        <div className="part-one d-flex col-lg-9 col-sm-12 row">
          <div className="col-lg-4 col-sm-12 row m-0 p-0">
            <div className="col-lg-12 col-sm-6 col-6 p-1">
              <BlogItem {...heroData[0]} size={"small "} />
            </div>
            <div className="col-lg-12 col-sm-6 col-6 p-1">
              <BlogItem {...heroData[1]} size={"small "} />
            </div>
          </div>
          <div className="col-lg-8 col-sm-12">
            <BlogItem {...heroData[2]} size={"large "} />
          </div>
        </div>
        <div className="part-two row col-lg-3 col-sm-12">
          <div className="col-lg-12 col-sm-6 col-6 p-1">
            <BlogItem {...heroData[3]} size={"small "} />
          </div>
          <div className="col-lg-12 col-sm-6 col-6 p-1">
            <BlogItem {...heroData[4]} size={"small "} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogHeroSection