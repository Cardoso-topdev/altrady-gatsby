import React from 'react';

const title = `Join now`
const content = `Manage Your Digital Assets Within One Interface`
const JoinNowSection = () => {
  return (
    <div className="section-cta join-now bk-color-blue">
      <h2 className="title">{title}</h2>
      <p className="lead-text">{content}</p>
    </div>
  );
};

export default JoinNowSection;