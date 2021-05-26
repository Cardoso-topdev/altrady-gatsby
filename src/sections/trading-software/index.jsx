import React from 'react';
import SectionHeader from '../../components/common/SectionHeader';
import SoftwareCard from '../../components/common/SoftwareCard';
import SectionLayout from '../../layouts/SectionLayout';

const TradingSoftwareSection = ({title, software_item}) => {
  return (
    <SectionLayout sectionName="trading-software">
      <SectionHeader title={title} />

      <div className="row software-container">
        {software_item.map( (item, idx) => (
          <SoftwareCard {...item} key={idx} clsName="col-lg-6 col-sm-6"/>
        ))}
      </div>
    </SectionLayout>
  );
};

export default TradingSoftwareSection;