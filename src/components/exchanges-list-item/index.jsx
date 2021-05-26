import React from 'react';
import "../style.scss"

const ExchangesListItem = ({
  imgSrc,
  title,
  tags,
  content,
  markets,
  coins,
  volume
}) => {
  return (
    <div className="col-lg-6 col-sm-12 item-container">
      <div className="item d-flex flex-column justify-content-between">
        <div>
          <div className="item-header d-flex">
            <img src={imgSrc} alt={title} className="item__img" />
            <div className="item-title__container">
              <h4 className="item__title">{title}</h4>
              <div className="d-flex">
                {tags.map( ({tagName, clsName}, idx) => (
                  <p className={"caption item-tag " + clsName} key={idx}>{tagName}</p>
                ) )}
              </div>
            </div>
          </div>
          <div className="item-content">
          <p className="item-content__content">{content}</p>
          <div className="item-content-info d-flex">
            <div className="item-content-info__container">
              <p className="caption">Markets:</p>
              <h4 className="item-content-info__value">{markets}</h4>
            </div>
            <div className="item-content-info__container">
              <p className="caption">Coins:</p>
              <h4 className="item-content-info__value">{coins}</h4>
            </div>
            <div className="item-content-info__container">
              <p className="caption">24h Volume:</p>
              <h4 className="item-content-info__value">{volume}</h4>
            </div>
          </div>
        </div>
        </div>
        <div className="action d-flex justify-content-between">
          <p className="btn-learn-more button color-primary position-relative text-link">Learn more</p>   
          <p className="caption">* - not supported in Altrady</p>
        </div>
      </div>
    </div>
  );
};

export default ExchangesListItem;