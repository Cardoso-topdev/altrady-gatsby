import React from 'react';

const AnnualHeaderItem = ({
  type, 
  percentage, 
  currentPrice, 
  reducedPrice, 
  oldPrice
}) => {
  return (
    <div className="col-lg-3 col-sm-4 col-4 text-center">
      <h3 className="annual-type">{type}</h3>
      <h5 className="percentage color-negative">{percentage}</h5>
      <h2 className="current-price">{currentPrice}</h2>
      <p className="label color-tertiary reduce-price">{reducedPrice}</p>
      <p className="label-strike">{oldPrice}</p>
    </div>
  );
};

export default AnnualHeaderItem;