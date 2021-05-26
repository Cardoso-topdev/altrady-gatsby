import React from 'react';
import BlogListItem from '../../components/blog-list-item';
import { BlogImg } from "../../utils/imgLoader"

const blogListData = [
  {
    title: `Best Bitcoin and Crypto Interest Accounts in 2021`,
    date: `May 6, 2021`,
    imgSrc: BlogImg
  },
  {
    title: `Best Bitcoin and Crypto Interest Accounts in 2021`,
    date: `May 6, 2021`,
    imgSrc: BlogImg
  },
  {
    title: `Best Bitcoin and Crypto Interest Accounts in 2021`,
    date: `May 6, 2021`,
    imgSrc: BlogImg
  },
  {
    title: `Best Bitcoin and Crypto Interest Accounts in 2021`,
    date: `May 6, 2021`,
    imgSrc: BlogImg
  },
  {
    title: `Best Bitcoin and Crypto Interest Accounts in 2021`,
    date: `May 6, 2021`,
    imgSrc: BlogImg
  },
  {
    title: `Best Bitcoin and Crypto Interest Accounts in 2021`,
    date: `May 6, 2021`,
    imgSrc: BlogImg
  },
  {
    title: `Best Bitcoin and Crypto Interest Accounts in 2021`,
    date: `May 6, 2021`,
    imgSrc: BlogImg
  },
  {
    title: `Best Bitcoin and Crypto Interest Accounts in 2021`,
    date: `May 6, 2021`,
    imgSrc: BlogImg
  },
  {
    title: `Best Bitcoin and Crypto Interest Accounts in 2021`,
    date: `May 6, 2021`,
    imgSrc: BlogImg
  },
  {
    title: `Best Bitcoin and Crypto Interest Accounts in 2021`,
    date: `May 6, 2021`,
    imgSrc: BlogImg
  },
  {
    title: `Best Bitcoin and Crypto Interest Accounts in 2021`,
    date: `May 6, 2021`,
    imgSrc: BlogImg
  },
  {
    title: `Best Bitcoin and Crypto Interest Accounts in 2021`,
    date: `May 6, 2021`,
    imgSrc: BlogImg
  },
  {
    title: `Best Bitcoin and Crypto Interest Accounts in 2021`,
    date: `May 6, 2021`,
    imgSrc: BlogImg
  },
  {
    title: `Best Bitcoin and Crypto Interest Accounts in 2021`,
    date: `May 6, 2021`,
    imgSrc: BlogImg
  },
  {
    title: `Best Bitcoin and Crypto Interest Accounts in 2021`,
    date: `May 6, 2021`,
    imgSrc: BlogImg
  }
]
const BlogList2 = () => {
  return (
    <div className="blog-list2">
      <div className="row">
        {blogListData.map( (item, idx) => (
          <BlogListItem {...item} key={idx} extraCls=" col-lg-4 col-sm-4 " />
        ))}
      </div>
    </div>
  );
};

export default BlogList2;