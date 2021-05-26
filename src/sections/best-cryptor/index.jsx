import React from 'react';
import BlogItem from '../../components/blog-item';
import SectionHeader from '../../components/common/SectionHeader';
import SectionLayout from '../../layouts/SectionLayout';
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
const BestCryptorSection = ({title, content, data}) => {
  return (
    <SectionLayout
      sectionName="best-cryptor">
      <SectionHeader
        title={title}
        content={content} />
      <div className="row blog-item-container best-cryptor-content">
        {data.map( (item, idx) => (
          <BlogItem 
            {...item} 
            size="small " 
            clsName="col-lg-3 col-sm-6" 
            key={idx}/>
        ))}
      </div>
    </SectionLayout>
  );
};

export default BestCryptorSection;