import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/main.scss"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="container header-wrapper">
      <h1 className="title">
        <Link to="/">{siteTitle}</Link>
      </h1>
      <ul className="navigation">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/events">Events</Link></li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
