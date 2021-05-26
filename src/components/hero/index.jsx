import React from 'react';
import LinkPrimaryBtn from '../../components/common/LinkPrimaryBtn';
import LinkSecondBtn from '../../components/common/LinkSecondBtn';
import "../style.scss"

const HeroComponent = ({
  clsName, 
  kickerText,
  headerContent, 
  sectionContent,
  sectionCaption,
  heroImg
}) => {
  return (
    <section className={clsName}>
      <div className="layout-container">
      <div className="row">
        <div className="col-lg-6 left-part">
          <p className="kicker">{kickerText}</p>
          <h1 className="section-title">{headerContent}</h1>
          <p className="section-content">{sectionContent}</p>
          <div className="btn-container">
            <LinkPrimaryBtn to="/">Try for Free</LinkPrimaryBtn>
            {sectionCaption && <LinkSecondBtn to="/why-altrady">Why Altrady?</LinkSecondBtn> }
          </div>
          {sectionCaption && <p className="section-caption caption">{sectionCaption}</p>}
          
        </div>
        <div className="col-lg-6">
          <div className="hero-img-container img-container">
            <img src={heroImg} alt={headerContent} />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroComponent;