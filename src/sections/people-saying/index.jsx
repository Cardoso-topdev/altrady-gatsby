import React from 'react';
import SectionHeader from '../../components/common/SectionHeader';
import PeopleSayingItem from '../../components/people-saying';
import SectionLayout from '../../layouts/SectionLayout';

const PeopleSayingSection = ({content, title, testimonial}) => {
  return (
    <SectionLayout sectionName="people-saying">
      <SectionHeader
        title={title}
        content={content} />
      <div className="row">
        {testimonial.map( (item, idx) => <PeopleSayingItem 
            key={idx}
            content={item.content1}
            imgSrc={item.img.url} />)}
      </div>
    </SectionLayout>
  );
};

export default PeopleSayingSection;