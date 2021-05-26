import React from 'react';

const BlogItem = ({
  title,
  content,
  date,
  type,
  color,
  img,
  size,
  clsName
}) => {
  return (
    <div className={"item " + size + clsName}>
      <div className="img-overlay-container position-relative">
        <img alt={title} src={img?.url} className="item__img w-100" />
        <div className="overlay position-absolute w-100 h-100"></div>
      </div>
      <p className={"caption item__type " + color}>{type}</p>
      <h4 className="item__title">{title}</h4>
      <p className="item__content">{content}</p>
      <p className="caption item__time color-tertiary">{date}</p>
    </div>
  );
};

export default BlogItem;