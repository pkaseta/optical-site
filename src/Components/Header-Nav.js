import React from 'react'
import logo from "../Assets/logo.png"

const HeaderNav = () => {
    return (
      <div className="navbar-container">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="company-title-home-nav"></div>
        <div className="site-links-container"></div>
      </div>
    )
}

export default HeaderNav
