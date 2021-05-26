import React from 'react';

const SectionHeader = ({title, content}) => {
  return (
    <div className="section-header">
      <h2 className="section-title">{title}</h2>    
      {content && <p className="lead-text">{content}</p> }
    </div>
  );
};

export default SectionHeader;