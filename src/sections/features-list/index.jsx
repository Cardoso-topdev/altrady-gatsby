import React from 'react';
import FeatureItem from '../../components/common/FeatureItem';
import LinkSecondBtn from '../../components/common/LinkSecondBtn';
import SectionHeader from '../../components/common/SectionHeader';
import SectionLayout from '../../layouts/SectionLayout';

const cryptorTradingData = [
  {
    title: `Feature name`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlabore et dolore magna aliqua. Porttitor eget dolor morbi non arcu risus quis varius. Lorem sed risus ultricies tristique nulla. Egestas quis ipsum suspendisse ultrices gravida dictum fusce.

Egestas sed tempus urna et pharetra. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel.`
  },
  {
    title: `Feature name`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlabore et dolore magna aliqua. Porttitor eget dolor morbi non arcu risus quis varius. Lorem sed risus ultricies tristique nulla. Egestas quis ipsum suspendisse ultrices gravida dictum fusce.

Egestas sed tempus urna et pharetra. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel.`
  },
  {
    title: `Feature name`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlabore et dolore magna aliqua. Porttitor eget dolor morbi non arcu risus quis varius. Lorem sed risus ultricies tristique nulla. Egestas quis ipsum suspendisse ultrices gravida dictum fusce.

Egestas sed tempus urna et pharetra. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel.`
  },
  {
    title: `Feature name`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlabore et dolore magna aliqua. Porttitor eget dolor morbi non arcu risus quis varius. Lorem sed risus ultricies tristique nulla. Egestas quis ipsum suspendisse ultrices gravida dictum fusce.

Egestas sed tempus urna et pharetra. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel.`
  }
]
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