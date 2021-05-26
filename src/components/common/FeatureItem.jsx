import React from 'react';
import LinkSecondBtn from './LinkSecondBtn';
import {PlanCheck} from "../../utils/imgLoader"

const ActionBtn = () => <span className="btn-learn-more btn-text text-link">Learn more</span>
const FeatureItem = ({tag, title, content, even, features, showCTABtn=true, img}) => {
  return (
    <div className={"section-item row d-flex" + even}>
      <div className="col-lg-6 col-sm-12 section-item__content-wrapper">
        {tag && <p className="kicker">{tag}</p>}
        <h2 className="section-item__title">{title}</h2>
        { content && <>
          <p className="section-item__content">{content}</p>
          {showCTABtn && <LinkSecondBtn> <ActionBtn /> </LinkSecondBtn>}
          
        </>}
        { features && <ul>
          {features.map( (item, idx) => (
            <li key={idx} className="d-flex">
              <img src={PlanCheck} alt="Altrady" className="section-item__plan-check" />
              <p className="section-item__content">{item.content}</p>
            </li>
          ))}
        </ul>}
      </div>
      <div className="col-lg-6 col-sm-12">
        <div className="img-container">
          {img && <img alt={title} src={img.url} />}
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;