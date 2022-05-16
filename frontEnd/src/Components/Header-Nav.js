import React from "react";
import logo from "../Assets/logo.png";

const HeaderNav = () => {
  return (
    <div className="navbar-container">
      <div className="company-title-home-nav">
        <a
          href="/"
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          Optical Site{" "}
        </a>{" "}
      </div>{" "}
      <div className="page-links">
        <a href="/mens" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="nav-mens"> Mens </div>
        </a>
        <div className="nav-womens"> Womens </div>{" "}
        <div className="nav-kids"> Kids </div>{" "}
        <div className="nav-sunglasses"> Sunglasses </div>{" "}
        <div className="nav-contacts"> Contacts </div>{" "}
      </div>{" "}
    </div>
  );
};

export default HeaderNav;
