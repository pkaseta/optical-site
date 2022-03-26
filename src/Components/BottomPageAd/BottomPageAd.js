import React from "react";

import DetroitSkyline from "../../Assets/detroit-skyline.jpeg";

import "../BottomPageAd/BottomPageAd.scss";

const BottomPageAd = () => {
  return (
    <div className="bottom-page-ad">
      <div className="image-container">
        <img src={DetroitSkyline} alt="Detroit Skyline" />
      </div>
      <div className="detroit-card">
        <div className="title">Brought to you from the D!</div>
        <div classname="body">
          All glasses manufactured and shipped right here in Metro Detroit!
        </div>
      </div>
    </div>
  );
};

export default BottomPageAd;
