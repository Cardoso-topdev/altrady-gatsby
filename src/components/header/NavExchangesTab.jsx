import React from 'react';
import ExchangeItem from './ExchangeItem';
import { Link } from 'gatsby';

const NavExchangesTab = ({exchangeData}) => {
  return (
    <div className="dropdown-content">
      <div className="layout-container">
        <div className="nav-col">
          <h4 className="title">
            Supported exchanges
          </h4>
          <div className="exchange row">
            {exchangeData?.map( (item, idx) => (
              <ExchangeItem 
                title={item.title}
                content={item.content}
                imgSrc={item.exc_img.url}
                extraCls=" width-lg-20 col-sm-6"
                key={idx}
              />
            ))}
          </div>
        </div>
        <div className="action-wrapper">
          <Link to="/exchanges" className="view-all link-non-effect">
            <p className="view-all-feature text-link">View all exchanges</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavExchangesTab;