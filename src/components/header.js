import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./Header.css"

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"></Link>
      <Link to="/pricing">Pricing</Link>
      <Link to="/updates">Updates</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/tryfree">
        <button>Try Free</button>
      </Link>
    </div>
  </div>
)

export default Header
