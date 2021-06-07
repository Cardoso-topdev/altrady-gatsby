import React from 'react';
import BlogItem from '../../components/blog-item';
import SectionHeader from '../../components/common/SectionHeader';
import SectionLayout from '../../layouts/SectionLayout';

const BestCryptorSection = ({title, content, data, categories}) => {
  return (
    <SectionLayout
      sectionName="best-cryptor">
      <SectionHeader
        title={title}
        content={content} />
      <div className="row blog-item-container best-cryptor-content">
        {data.map( (item, idx) => (
          <BlogItem 
            {...item} 
            categories={categories}
            size="small " 
            clsName="col-lg-3 col-sm-6" 
            key={idx}/>
        ))}
      </div>
    </SectionLayout>
  );
};

export default BestCryptorSection;