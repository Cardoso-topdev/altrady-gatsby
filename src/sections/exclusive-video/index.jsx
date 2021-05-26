import React from 'react';
import SectionHeader from '../../components/common/SectionHeader';
import SectionLayout from '../../layouts/SectionLayout';

const title = `Exclusive Videos to Help You Learn Trading Faster`
const content = `We have prepared exclusive videos only for you, our Altrady user, to access. Through these videos, you can learn trading faster and become successful in this venture. Our team is developing more contents to help you with trading strategy and decision-making.`
const ExclusiveVideoSection = () => {
  return (
    <SectionLayout
      sectionName="exclusive-video" >
      <SectionHeader
        title={title}
        content={content} />

      <div className="section-body">
        <div className="video-container">
          <h4 className="video-holder">Youtube Video</h4>
        </div>
      </div>

    </SectionLayout>
  );
};

export default ExclusiveVideoSection;