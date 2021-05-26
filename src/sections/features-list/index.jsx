import React from 'react';
import FeatureItem from '../../components/common/FeatureItem';
import LinkSecondBtn from '../../components/common/LinkSecondBtn';
import SectionHeader from '../../components/common/SectionHeader';
import SectionLayout from '../../layouts/SectionLayout';

const FeaturesListSection = ({title, content, featuresListData=[]}) => {
  return (
    <SectionLayout sectionName="cryptor">
      <SectionHeader
        title={title}
        content={content} />
      <div className="cryptor-content-wrapper">
        {featuresListData.map( (item, idx) => <FeatureItem 
          key={idx}
          tag={item.kicker}
          even={(idx % 2 === 0) ? "" : " flex-row-reverse"}
          {...item} />)}
      </div>
      <div className="text-center btn-container">
        <LinkSecondBtn to="/features"> See all features </LinkSecondBtn>
      </div>
    </SectionLayout>
  );
};

export default FeaturesListSection;