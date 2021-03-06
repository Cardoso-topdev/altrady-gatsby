import React from 'react';

const BlogListItem = ({thumbnail, title, date , extraCls=""}) => {
  return (
    <div className="blog-list-item d-flex">
      <img alt={title} src={thumbnail?.url} className="blog-list-item__img" />
      <div className="blog-list-item__content">
        <h5 className="blog-list-item__title">{title}</h5>
        <p className="caption blog-list-item__date">{date}</p>
      </div>
    </div>
  );
};

export default BlogListItem;