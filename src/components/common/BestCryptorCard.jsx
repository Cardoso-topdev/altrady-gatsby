import React from 'react';

const BestCryptorCard = ({type, typeColor, description}) => {
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="best-cryptor-card">
        <div className="card-container">
        </div>
        <p className={"label card-type " + typeColor}>{type}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default BestCryptorCard;