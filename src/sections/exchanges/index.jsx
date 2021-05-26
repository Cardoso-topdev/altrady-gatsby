import React from 'react';
import ExchangeItem from '../../components/header/ExchangeItem';
import SectionLayout from '../../layouts/SectionLayout';

const ExchangeSection = ({extraCls = "", exchangeData}) => {
  return (
    <SectionLayout sectionName={"exchanges " + extraCls}>
      <div className="exchanges-item__container">
        <div className="first-line d-flex row">
          {exchangeData?.map(({ title, exc_img }, idx) =>
            <ExchangeItem
              title={title}
              key={idx}
              imgSrc={exc_img.url}
              extraCls=" width-sm-20"
            />
          )}
        </div>
      </div>
    </SectionLayout>
  );
};

export default ExchangeSection;