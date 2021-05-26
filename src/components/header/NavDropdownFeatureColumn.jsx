import React from 'react';
import NavFeatureItem from '../common/NavFeatureItem';

const NavDropdownFeatureColumn = ({title, content}) => {
  return (
    <div className="col-lg-4 nav-col">
      <h4 className="title">
        {title}
      </h4>
      <div className="row flex-column">

      {content && content.map( ({title, content, exc_img}, idx) => (
        <NavFeatureItem 
          title={title}
          content={content}
          imgSrc={exc_img.url}
          key={idx}
        />
      ))}
      </div>
    </div>
  );
};

export default NavDropdownFeatureColumn;