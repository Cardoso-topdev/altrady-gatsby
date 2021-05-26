import React from 'react';
import {PlanCheck} from "../../utils/imgLoader"

const AnnualRow = ({title, description}) => {
  return (
    <>
      <div
        className="col-lg-3 col-sm-12 col-12 border-trb plan-content">
        <h4 className="option-title">{title}</h4>
        <p className="description">{description}</p>
      </div>
      <div
        className="col-lg-3 col-4 d-flex justify-content-center border-trb">
        <img
          alt={"Option Check"}
          src={PlanCheck}
          className="option-check w-fit-content" />
      </div>
      <div
        className="col-lg-3 col-4 d-flex justify-content-center border-trb">
        <img
          alt={"Option Check"}
          src={PlanCheck}
          className="option-check w-fit-content" />
      </div>
      <div
        className="col-lg-3 col-4 d-flex justify-content-center border-tb">
        <img
          alt={"Option Check"}
          src={PlanCheck}
          className="option-check w-fit-content" />
      </div>
    </>
  );
};

export default AnnualRow;