import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import "../styles/main.scss"
import SideNav from "./side_nav"

export default function Header( {siteTitle} ) {
  const [menuIconClicked, setMenuIconClicked] = useState(false);

  return (
    <header className="header">
      <div className="container header-wrapper">
        <h1 className="title">
          <Link to="/">{siteTitle}</Link>
        </h1>
        <div className="navigation-row">
          <ul className="navigation-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/events">Events</Link></li>
          </ul>
        
          <div className={"hamburger-icon " + (menuIconClicked ? "change" : "")} onClick={() => setMenuIconClicked(!menuIconClicked)}>
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
          <SideNav 
            isShown={menuIconClicked}
            setMenuIconClicked={setMenuIconClicked}
          />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}