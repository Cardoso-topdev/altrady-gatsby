import React, { useState } from 'react';
import { Logo } from "../../utils/imgLoader"
import { Link } from "gatsby"
import "../style.scss"
import LinkPrimaryBtn from '../common/LinkPrimaryBtn';
import NavFeatureTab from '../header/NavFeatureTab';

import BodyClassName from 'react-body-classname';
import { BlogIcon } from "../../utils/imgLoader"

const BlogHeader = () => {
  const [hambugerActive, setHambugerActiveState] = useState(false)
  const [navMenuShow, setNavMenuShow] = useState(["", ""])
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
      <header className="header blog-header">
        <div className="layout-container">
          <nav className="header-nav">
            <div className="left-side d-flex">
              <Link to="https://www.altrady.com/">
                <img alt="altrady logo" src={Logo}/>
              </Link>
              <Link to="https://www.altrady.com/blog">
              <div className="navbar-blog d-flex">
                <img alt="blog icon" src={BlogIcon} className="blog-icon" />
                <p className="navlink color-secondary m-auto">Blog</p>
              </div>
              </Link>
            </div>
            <div className="d-flex">
              <ul className="nav-items tablet-show">
                <li className="nav-item">
                  <Link to="#what" className="nav-link">What is Altrady</Link>
                </li>
                <li className="nav-item">
                  <Link to="#categories" className="nav-link">Categories</Link>
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
                <li className="nav-item">
                  <Link to="#what" className="nav-link">What is Altrady</Link>
                </li>
                <li className={"nav-item dropdown " + navMenuShow[0]} onClick={() => navMenuClick(0)}>
                  <Link to="#features" className="nav-link dropdown-item">Features<span /></Link>
                  <NavFeatureTab />
                </li>
                <li className={"nav-item dropdown " + navMenuShow[1]} onClick={() => navMenuClick(1)}>
                  <Link to="#categories" className="nav-link dropdown-item">Categories<span /></Link>
                  <NavFeatureTab />
                </li>
                <li className="action-btns">
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

export default BlogHeader;