import React from 'react';
import { ReviewMark } from "../../utils/imgLoader"

const ReviewItem = ({ userName, review, marks}) => {
  return (
    <div className="col-lg-4 col-sm-12">
      <div className="review-item">
        <img alt="review" src={ReviewMark} className="review-item__mark" />
        <h4 className="userName">{userName}</h4>
        <p className="review">{review}</p>
      </div>
    </div>
  );
};

export default ReviewItem;