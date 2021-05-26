import { Link } from 'gatsby';
import React from 'react';

const NavFeatureItem = ({ title, content, imgSrc }) => {
  return (
    <Link to="/feature" className="link-non-effect">
      <div className="feature-item col-sm-6 col-lg-12">
        <img alt={title} src={imgSrc} className="feature-item__image" />
        <div className="feature-item__content-wrapper">
          <h5 className="feature-item_title">{title}</h5>
          {content && <p className="label feature-item_content">{content}</p>}
        </div>
      </div>
    </Link>
  );
};

export default NavFeatureItem;