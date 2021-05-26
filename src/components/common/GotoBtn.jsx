import React from 'react';
import { Link } from "gatsby"
import "../style.scss"

const GotoBtn = ({to="/", clsName, children}) => {
  return <Link to={to} className={"btn btn-primary " + clsName}>{children}</Link>
};

export default GotoBtn;