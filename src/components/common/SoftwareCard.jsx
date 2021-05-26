import React from 'react';

const ActionBtn = ({ctaText}) => <span className="btn-text open-now text-link">{ctaText}</span>

const SoftwareCard = ({os, os_description, img, cta_text, clsName}) => {
  return (
    <div className={clsName}>
      <div className="software-card">
        <img alt={os} src={img?.url} className="benefit-item__image" />
        <h4 className="os">{os}</h4>
        <p className="description">{os_description}</p>
        <ActionBtn ctaText={cta_text}/>
      </div>
    </div>
  );
};

export default SoftwareCard;