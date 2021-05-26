import React from 'react';

const ExchangeItem = ({title, imgSrc}) => {
  return (
    <div className="exchange-item">
      <img alt={title} src={imgSrc} className="exchange-item__image" />
      <h5 className="exchange-item_title">{title}</h5>
    </div>
  );
};

export default ExchangeItem;