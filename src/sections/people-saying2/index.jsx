import React from 'react';
import SectionHeader from '../../components/common/SectionHeader';
import PeopleSayingItem2 from '../../components/people-saying2';
import SectionLayout from '../../layouts/SectionLayout';

const PeopleSayingSection2 = ({title, content, testimonial}) => {
  return (
    <SectionLayout sectionName="people-saying-second">
      <SectionHeader
        title={title}
        content={content} />
      <div className="row section-body">
        {testimonial.map( (item, idx) => <PeopleSayingItem2 
          content={item.content1}
          title={item.title1}
          imgSrc={item.img.url}
          key={idx} />)}
      </div>
    </SectionLayout>
  );
};

export default PeopleSayingSection2;