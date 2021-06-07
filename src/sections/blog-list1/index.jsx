import React from 'react';
import BlogItem from '../../components/blog-item';

const BlogList1 = ({blogData, categories}) => {
  const mediumListData = blogData.slice(0,3)
  const smallListData = blogData.slice(3, 11)
  return (
    <div className="blog-list1 blog-item-container">
      <div className="row">
        {mediumListData.map( (item, idx) => (
          <BlogItem 
            {...item} 
            size="medium " 
            clsName={(idx === 2) ? "col-lg-4 col-sm-4 last-element" : "col-lg-4 col-sm-4"} 
            categories={categories} 
            key={idx}/>
        ))}

        {smallListData.map( (item, idx) => (
          <BlogItem {...item} size="small " clsName="col-lg-3 col-sm-6" categories={categories} key={idx}/>
        ))}
      </div>
    </div>
  );
};

export default BlogList1;