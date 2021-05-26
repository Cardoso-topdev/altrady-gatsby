import React from 'react';

const TestmonialCard3 = ({review, name, position, imgSrc}) => {
  return (
    <div className="testimonial-card m-auto">
      <p className="lead-text">{review}</p>
      <div className="user-wrapper">
        <div className="user">
          <img 
            alt="user avatar" 
            src={imgSrc} 
            className="user-image" />
          <div className="user-data">
            <h4 className="user-name">{name}</h4>
            <p className="label">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestmonialCard3;