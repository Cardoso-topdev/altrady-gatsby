import React from 'react';

const BlogItem = ({data, categories, size, clsName}) => {
  const { title, content, date, thumbnail, category } = data
  let color = "green"
  let type = "test"
  categories.forEach(item => {
    if (item.prismicId === category?.id ){
      color = item.data.category_color
      type = item.data.meta_title
    }
  });
  return (
    <div className={"item " + size + clsName}>
      <div className="img-overlay-container position-relative">
        <img alt={title} src={thumbnail?.url} className="item__img w-100" />
        <div className="overlay position-absolute w-100 h-100"></div>
      </div>
      <p className={"caption item__type " + color}>{type}</p>
      <h4 className="item__title">{title}</h4>
      { (size === "large ") && <p className="item__content">{content}</p>}
      <p className="caption item__time color-tertiary">{date}</p>
    </div>
  );
};

export default BlogItem;