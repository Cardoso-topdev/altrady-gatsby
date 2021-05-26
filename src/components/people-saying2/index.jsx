import React from 'react';

const ActionBtn = () => <span className="find-more btn-text text-link">Find out more</span>

const PeopleSayingItem2 = ({imgSrc, title, content}) => {
  return (
    <div className="col-lg-4 col-sm-12">
      <div className="people-saying-item second">
        <img alt="Testimonial" 
          src={imgSrc} 
          className="people-saying-item__img" />

        <h4 className="title">{title}</h4>
        <p className="content">{content}</p>

        <ActionBtn />
      </div>
    </div>
  );
};

export default PeopleSayingItem2;