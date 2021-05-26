import React from 'react';
import { Link } from "gatsby"
import "../style.scss"

const LinkNormalBtn = ({to="/", clsName, children}) => {
  return <Link to={to} className={"btn btn-normal " + clsName}>{children}</Link>
};

export default LinkNormalBtn;