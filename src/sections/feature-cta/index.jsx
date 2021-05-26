import React from 'react';
import {
  Feature1,
  Feature2,
  Feature3,
  Feature4
} from "../../utils/imgLoader"

const sectionData = [
  {
    imgSrc : Feature1
  },
  {
    imgSrc : Feature2
  },
  {
    imgSrc : Feature3
  },
  {
    imgSrc : Feature4
  }
]

const FeatureCTASection = () => {
  return (
    <div className="section-cta as-featured-in">
      <div className="layout-container text-center">
        <h5 className="title">As featured in:</h5>
        <div className="row">
          {sectionData.map( ({imgSrc}, idx ) => (
            <div className="col-lg-3 col-sm-6 section-item" key={idx}>
              <img 
                alt="featured in" 
                src={imgSrc} 
                className="feature-img" />
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCTASection;