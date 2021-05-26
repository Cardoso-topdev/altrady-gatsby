import React from 'react';
import SectionLayout from '../../layouts/SectionLayout';
import FeatureItem from '../../components/common/FeatureItem';

const featuresData = [
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
const AllFeatures = () => {
  return (
    <SectionLayout sectionName="all-features">
      <div className="cryptor-content-wrapper">
        {featuresData.map( (item, idx) => <FeatureItem 
          key={idx}
          tag="kicker text"
          even={(idx % 2 === 0) ? "" : " flex-row-reverse"}
          {...item} />)}
      </div>
    </SectionLayout>
  );
};

export default AllFeatures;