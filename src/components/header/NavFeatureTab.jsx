import React from 'react';
import NavDropdownFeatureColumn from './NavDropdownFeatureColumn';
import { Link } from 'gatsby';

const NavFeatureTab = ({
  navFeatureExcuteData,
  navFeatureDiscoverData,
  navFeatureAnalyzeData
}) => {
  return (
    <div className="dropdown-content">
      <div className="layout-container">
        <div className="row">
          <NavDropdownFeatureColumn 
            title="Discover"
            content={navFeatureDiscoverData}
          />
          <NavDropdownFeatureColumn 
            title="Execute"
            content={navFeatureExcuteData}
          />
          <NavDropdownFeatureColumn 
            title="Analyze"
            content={navFeatureAnalyzeData}
          />
        </div>
        <div className="action-wrapper">
          <Link to="/features" className="view-all link-non-effect">
            <p className="view-all-feature text-link">View all features</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavFeatureTab;