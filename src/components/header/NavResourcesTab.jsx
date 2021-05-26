import React from 'react';
import NavDropdownFeatureColumn from './NavDropdownFeatureColumn';

const NavResourcesTab = ({
  navResourceExchangeData,
  navResourceResourceData,
  navResourcePartnerData
}) => {
  return (
    <div className="dropdown-content resource-tab">
      <div className="layout-container">
        <div className="row">
          <NavDropdownFeatureColumn 
            title="Resources"
            content={navResourceResourceData}
          />
          <NavDropdownFeatureColumn 
            title="Partners"
            content={navResourcePartnerData}
          />
          <NavDropdownFeatureColumn 
            title="Partner exchanges"
            content={navResourceExchangeData}
          />
        </div>
      </div>
    </div>
  );
};

export default NavResourcesTab;