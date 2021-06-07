import React from 'react';
import BlogListItem from '../../components/blog-list-item';

const BlogList2 = ({blogData}) => {
  const blogListData = blogData.slice(12)
  return (
    <div className="blog-list2">
      <div className="row">
        {blogListData.map( (item, idx) => (
          <BlogListItem {...item.data} key={idx} extraCls=" col-lg-4 col-sm-4 " />
        ))}
      </div>
    </div>
  );
};

export default BlogList2;