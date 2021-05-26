import React from 'react';
import { Link } from "gatsby"
import "../style.scss"

const LinkSecondBtn = ({to="/", clsName, children}) => {
  return <Link 
    to={to} 
    className={"btn btn-second " + clsName}>
      {children}
    </Link>
};

export default LinkSecondBtn;