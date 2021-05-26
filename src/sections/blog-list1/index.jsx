import React from 'react';
import BlogItem from '../../components/blog-item';
import { BlogImg } from "../../utils/imgLoader"

const mediumListData = [
  {
    title : `Algorithmic Crypto Trading`,
    content: ``,
    time: `May 6, 2021`,
    type: `Crypto Strategy`,
    color: `red`,
    imgSrc: BlogImg
  },
  {
    title : `Algorithmic Crypto Trading`,
    content: ``,
    time: `May 6, 2021`,
    type: `Crypto Strategy`,
    color: `red`,
    imgSrc: BlogImg
  },
  {
    title : `Algorithmic Crypto Trading`,
    content: ``,
    time: `May 6, 2021`,
    type: `Crypto Strategy`,
    color: `red`,
    imgSrc: BlogImg
  }
]

const smallListData = [
  {
    title : `Best Candlestick Patterns`,
    content: ``,
    time: `May 6, 2021`,
    type: `Crypto Trading`,
    color: `green`,
    imgSrc: BlogImg
  },
  {
    title : `Best Candlestick Patterns`,
    content: ``,
    time: `May 6, 2021`,
    type: `Crypto Trading`,
    color: `green`,
    imgSrc: BlogImg
  },
  {
    title : `Best Candlestick Patterns`,
    content: ``,
    time: `May 6, 2021`,
    type: `Crypto Trading`,
    color: `green`,
    imgSrc: BlogImg
  },
  {
    title : `Best Candlestick Patterns`,
    content: ``,
    time: `May 6, 2021`,
    type: `Crypto Trading`,
    color: `green`,
    imgSrc: BlogImg
  },
  {
    title : `Best Candlestick Patterns`,
    content: ``,
    time: `May 6, 2021`,
    type: `Crypto Trading`,
    color: `green`,
    imgSrc: BlogImg
  },
  {
    title : `Best Candlestick Patterns`,
    content: ``,
    time: `May 6, 2021`,
    type: `Crypto Trading`,
    color: `green`,
    imgSrc: BlogImg
  },
  {
    title : `Best Candlestick Patterns`,
    content: ``,
    time: `May 6, 2021`,
    type: `Crypto Trading`,
    color: `green`,
    imgSrc: BlogImg
  },
  {
    title : `Best Candlestick Patterns`,
    content: ``,
    time: `May 6, 2021`,
    type: `Crypto Trading`,
    color: `green`,
    imgSrc: BlogImg
  }
]
const BlogList1 = () => {
  return (
    <div className="blog-list1 blog-item-container">
      <div className="row">
        {mediumListData.map( (item, idx) => (
          <BlogItem 
            {...item} 
            size="medium " 
            clsName={(idx === 2) ? "col-lg-4 col-sm-4 last-element" : "col-lg-4 col-sm-4"}  
            key={idx}/>
        ))}

        {smallListData.map( (item, idx) => (
          <BlogItem {...item} size="small " clsName="col-lg-3 col-sm-6" key={idx}/>
        ))}
      </div>
    </div>
  );
};

export default BlogList1;