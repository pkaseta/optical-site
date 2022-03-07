import React from "react";
import HomeCards from "../Components/HomeCards";
import { MockData } from "../Assets/MockData";
import OverlayFeature from "../Components/OverlayFeature";
import MidPageAd from "../Components/MidPageAd/MidPageAd.js";
import HomeAccordion from "../Components/HomeAccordion/HomeAccordion";
import BottomPageAd from "../Components/BottomPageAd/BottomPageAd";

const Home = () => {
  return (
    <div className="home-container">
      <OverlayFeature />
      <h1>New Releases</h1>
      <div className="cards-container">
        {MockData.map((frames) => {
          return (
            <HomeCards
              image={frames.image}
              frameName={frames.frameName}
              color={frames.color}
            />
          );
        })}
      </div>
      <MidPageAd />
      <HomeAccordion />
      <BottomPageAd />
    </div>
  );
};

export default Home;
