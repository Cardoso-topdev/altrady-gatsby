import React from 'react';

const BlogDetailHero = ({
  title,
  date, 
  type,
  typeColor,
  imgSrc
}) => {
  return (
    <div className="blog-detail-hero position-relative">
      <img src={imgSrc} alt="title" className="blog-detail-bk w-100"/>
      <div className="layout-container position-absolute blog-detail-hero__container">
        <p className={"caption blog-detail-hero__type color-white " + typeColor}>{type}</p>
        <h3 className="blog-detail-hero__title">{title}</h3>
        <p className="caption blog-detail-hero__date color-dark-tertiary">{date}</p>
      </div>
    </div>
  );
};

export default BlogDetailHero;