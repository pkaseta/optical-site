import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section-company">
        <ul>
          <li>
            <a href="/aboutUs">About Us</a>
          </li>
          <li>
            <a href="/all">Our Frames</a>
          </li>
          <li>
            <a href="/lenses">Lens Options</a>
          </li>
          <li>
            <a href="/contacts">Contact Lenses</a>
          </li>
        </ul>
      </div>
      <div className="footer-section-information">
        <ul>
          <li>
            <a href="/eg-ordering-guide">Eyeglass Online ordering guide</a>
          </li>
          <li>
            <a href="/cl-ordering-guide">
              Contact Lenses Online ordering guide
            </a>
          </li>
          <li>
            <a href="/faqs">FAQ's</a>
          </li>
          <li>
            <a href="/rx-info">Prescription Infortmation</a>
          </li>
        </ul>
      </div>
      <div className="footer-section-social"></div>
    </div>
  );
};

export default Footer;
