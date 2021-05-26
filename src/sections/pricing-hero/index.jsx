import React from 'react';
import LinkPrimaryBtn from '../../components/common/LinkPrimaryBtn';
import "../style.scss"

const sectionContent = `Boost your trading with the all-in-one cryptocurrency trading software. Trade on multiple exchanges, track your performance, improve and get less emotional.
Bitcoin trading platform for beginners and expert traders.`
const headerContent = `Plans`

const PricingHero = ({extraClsName}) => {
  return (
    <section className={"section hero " + extraClsName}>
      <div className="layout-container">
      <div className="row">
        <div className="col-lg-6 d-flex align-items-center">
          <div>
            <p className="kicker">Plans and prices</p>
            <h1 className="section-title">{headerContent}</h1>
            <p className="section-content">{sectionContent}</p>
            <div className="btn-container">
              <LinkPrimaryBtn to="/">Try for Free</LinkPrimaryBtn>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="hero-img-container img-container">
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default PricingHero;