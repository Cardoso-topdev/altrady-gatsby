import React from 'react';

const PeopleSayingItem = ({content, imgSrc}) => {
  return (
    <div className="col-lg-4 col-sm-12">
      <div className="people-saying-item">
        <img alt="Testimonial" src={imgSrc} className="people-saying-item__img" />
        <p className="people-saying-item__content">{content}</p>
      </div>
    </div>
  );
};

export default PeopleSayingItem;