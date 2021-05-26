import React from 'react';
import SectionHeader from '../../components/common/SectionHeader';
import TestmonialCard3 from '../../components/common/TestmonialCard3';
import SectionLayout from '../../layouts/SectionLayout';

const PeopleSayingSection3 = ({
  showHeader=true, 
  extraClsName="", 
  title, 
  content, 
  testimonial,
  username,
  position,
  img
}) => {
  return (
    <SectionLayout
      sectionName={"people-saying-third " + extraClsName}>
        {showHeader && <SectionHeader
        title={title}
        content={content}/>}
      
      <div className="row text-center testimonial-wrapper">
        <TestmonialCard3
          review={testimonial}
          imgSrc={img.url}
          name={username}
          position={position} />
      </div>
    </SectionLayout>
  );
};

export default PeopleSayingSection3;