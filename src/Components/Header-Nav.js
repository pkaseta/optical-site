import React from "react";
import logo from "../Assets/logo.png";

const HeaderNav = () => {
  return (
    <div className="navbar-container">
      <div className="company-title-home-nav">Optical Site</div>
      <div className="page-links">
        <div className="nav-mens">Mens</div>
        <div className="nav-womens">Womens</div>
        <div className="nav-kids">Kids</div>
        <div className="nav-sunglasses">Sunglasses</div>
        <div className="nav-contacts">Contacts</div>
      </div>
    </div>
  );
};

export default HeaderNav;
