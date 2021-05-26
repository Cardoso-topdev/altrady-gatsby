import React from 'react';
import BlogItem from '../../components/blog-item';
import { BlogImg } from "../../utils/imgLoader"

const sectionData = [
  {
    title : `Best Candlestick PatternsBest Candlestick Patterns`,
    content: ``,
    time: `May 6, 2021`,
    type: `Crypto Trading`,
    color: `green`,
    imgSrc: BlogImg
  },
  {
    title : `Best Candlestick PatternsBest Candlestick Patterns`,
    content: ``,
    time: `May 6, 2021`,
    type: `Crypto Trading`,
    color: `green`,
    imgSrc: BlogImg
  },
  {
    title : `Best Candlestick PatternsBest Candlestick Patterns`,
    content: ``,
    time: `May 6, 2021`,
    type: `Crypto Trading`,
    color: `green`,
    imgSrc: BlogImg
  },
  {
    title : `Best Candlestick PatternsBest Candlestick Patterns`,
    content: ``,
    time: `May 6, 2021`,
    type: `Crypto Trading`,
    color: `green`,
    imgSrc: BlogImg
  },
  {
    title : `Best Candlestick PatternsBest Candlestick Patterns`,
    content: ``,
    time: `May 6, 2021`,
    type: `Crypto Trading`,
    color: `green`,
    imgSrc: BlogImg
  },
  {
    title : `Best Candlestick PatternsBest Candlestick Patterns`,
    content: ``,
    time: `May 6, 2021`,
    type: `Crypto Trading`,
    color: `green`,
    imgSrc: BlogImg
  },
  {
    title : `Best Candlestick PatternsBest Candlestick Patterns`,
    content: ``,
    time: `May 6, 2021`,
    type: `Crypto Trading`,
    color: `green`,
    imgSrc: BlogImg
  },
  {
    title : `Best Candlestick PatternsBest Candlestick Patterns`,
    content: ``,
    time: `May 6, 2021`,
    type: `Crypto Trading`,
    color: `green`,
    imgSrc: BlogImg
  }
]
const BlogDetailList = () => {
  return (
    <div className="blog-detail-list">
      <h4 className="more-blogs tablet-hide">More blogs</h4>
      <div className="row blog-item-container">
        {sectionData.map( (item, idx) => (
          <BlogItem {...item} size="small " clsName="col-lg-3 col-sm-6" key={idx}/>
        ))}
      </div>
    </div>
  );
};

export default BlogDetailList;