import React from 'react';

const UpcomingSupportItem = ({
  imgSrc,
  title,
  content
}) => {
  return (
    <div className="col-lg-6">
      <div className="item">
        <div className="d-flex">
          <img alt={title} src={imgSrc} className="item__img" />
          <h4 className="item__title d-flex align-items-center">{title}</h4>
        </div>
        <p className="item__content">{content}</p>
      </div>
    </div>
  );
};

export default UpcomingSupportItem;