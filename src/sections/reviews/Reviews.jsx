import React from 'react';
import SectionHeader from '../../components/common/SectionHeader';
import ReviewItem from '../../components/review/item';
import SectionLayout from '../../layouts/SectionLayout';

const ReviewsSection = ({content, title, review_item}) => {
  return (
    <SectionLayout sectionName="reviews">
      <SectionHeader
        title={title}
        content={content} />
      <div className="row">
        {review_item.map( (item, idx) => <ReviewItem 
            {...item}
            userName={item.username}
            key={idx} />)}
      </div>
    </SectionLayout>
  );
};

export default ReviewsSection;