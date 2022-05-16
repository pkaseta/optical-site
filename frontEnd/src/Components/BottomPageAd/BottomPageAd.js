import React from "react";

import "./BottomPageAd.scss";

const BottomPageAd = ({ featureImg, altText, title, body }) => {
  return (
    <div className="bottom-page-ad">
      <div className="image-container">
        <img src={featureImg} alt={altText} />
      </div>
      <div className="detroit-card">
        <div className="title">{title}</div>
        <div className="body">{body}</div>
      </div>
    </div>
  );
};

export default BottomPageAd;
