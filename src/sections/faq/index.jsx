import React, { useState } from 'react';
import SectionHeader from '../../components/common/SectionHeader';
import SectionLayout from '../../layouts/SectionLayout';

const title = `Frequently Asked Questions`
const content = `To support the global trading community, we are offering special discounts for Annual plan.`
const questions = [
  {
    title : `Question`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim.`
  },
  {
    title : `Question`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim.`
  },
  {
    title : `Question`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim.`
  },
  {
    title : `Question`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim.`
  },
  {
    title : `Question`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim.`
  },
  {
    title : `Question`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim.`
  },
  {
    title : `Question`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim.`
  }
]
const FAQSection = () => {
  const [activeIdx, setActiveIdx] = useState(-1)
  return (
    <SectionLayout sectionName="faq">
      <SectionHeader
        title={title}
        content={content}/>

      <div className="container faq-body">
        {questions.map( ({title, content}, idx) => (
          <div className={ (idx === activeIdx) ? "faq-item active" : "faq-item"} key={idx}>
            <h4 
              className="faq-item__title position-relative"
              onClick={() => {
                if ( idx === activeIdx)
                  setActiveIdx(-1)
                else 
                  setActiveIdx(idx)
              } }>{title}</h4>
            <p className="faq-item__content">{content}</p>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default FAQSection;