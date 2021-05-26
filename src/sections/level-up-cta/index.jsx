import React from 'react';
import LinkPrimaryBtn from '../../components/common/LinkPrimaryBtn';

const title = `Level Up Now`
const description = `Overwhelmed with the complexity of the cryptocurrency world?
Bring your trading experience to another level with the power of cryptocurrency trading software Altrady, your best bitcoin trading platform choice`
const LevelUpCTASection = () => {
  return (
    <div className="section-cta level-up">
      <h2 className="title">{title}</h2>
      <p className="lead-text">{description}</p>
      <LinkPrimaryBtn>Try for free</LinkPrimaryBtn>
    </div>
  );
}; 

export default LevelUpCTASection;