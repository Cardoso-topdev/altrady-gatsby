import React, { useState } from 'react';
import { Logo } from "../../utils/imgLoader"
import { Link } from "gatsby"
import "../style.scss"
import LinkSecondBtn from '../common/LinkSecondBtn';
import LinkPrimaryBtn from '../common/LinkPrimaryBtn';
import NavFeatureTab from './NavFeatureTab';
import NavExchangesTab from './NavExchangesTab';
import NavResourcesTab from './NavResourcesTab';
import BodyClassName from 'react-body-classname';

const Header = ({exchangeData}) => {
  const [hambugerActive, setHambugerActiveState] = useState(false)
  const [navMenuShow, setNavMenuShow] = useState(["", "", ""])
  const hamburgerHandler = () => {
    setHambugerActiveState(!hambugerActive)
  }
  const navMenuClick = (idx) => {
    let navMenuValue = navMenuShow
    if (navMenuShow[idx] === "show"){
      navMenuValue[idx] = ""
    } else {
      navMenuValue[idx] = "show"
    }
    setNavMenuShow(navMenuValue)
  }
  let humbugerClsName = "hamburger my-auto m-4 "
  let navMenuClsName = "nav-items desktop"
  let bodyClsName = ""
  if (hambugerActive) {
    humbugerClsName += "active"
    navMenuClsName += " active"
    bodyClsName += "bk-color-white"
  }
  return (
    <BodyClassName className={bodyClsName}>
      <header className="header">
        <div className="layout-container">
          <nav className="header-nav">
            <Link to="https://www.altrady.com/">
              <img alt="altrady logo" src={Logo} className="" />
            </Link>
            <div className="d-flex">
              <ul className="nav-items tablet-show">
                <li className="nav-item">
                  <Link to="/download" className="nav-link">Download</Link>
                </li>
                <li className="nav-item">
                  <Link to="/pricing" className="nav-link">Pricing</Link>
                </li>
                <li className="">
                  <LinkPrimaryBtn to="#try-free">Try for Free</LinkPrimaryBtn>
                </li>
              </ul>
              <div className={humbugerClsName} onClick={hamburgerHandler}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <ul className={navMenuClsName}>
                <li className={"nav-item dropdown " + navMenuShow[0]} onClick={() => navMenuClick(0)}>
                  <Link to="/features" className="nav-link dropdown-item">Features<span /></Link>
                  <NavFeatureTab />
                </li>
                <li className={"nav-item dropdown " + navMenuShow[1]} onClick={() => navMenuClick(1)}>
                  <Link to="/exchanges" className="nav-link dropdown-item">Exchanges<span /></Link>
                  <NavExchangesTab exchangeData={exchangeData}/>
                </li>
                <li className="nav-item">
                  <Link to="/download" className="nav-link">Download</Link>
                </li>
                <li className="nav-item">
                  <Link to="/pricing" className="nav-link">Pricing</Link>
                </li>
                <li className={"nav-item dropdown " + navMenuShow[2]} onClick={() => navMenuClick(2)}>
                  <Link to="#resources" className="nav-link dropdown-item">Resources<span /></Link>
                  <NavResourcesTab />
                </li>
                <li className="action-btns">
                  <LinkSecondBtn to="#login">Log in</LinkSecondBtn>
                  <LinkPrimaryBtn to="#try-free">Try for Free</LinkPrimaryBtn>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </BodyClassName>
  );
};

export default Header;