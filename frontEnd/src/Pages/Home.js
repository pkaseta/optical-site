import React from "react";
import HomeCards from "../Components/HomeCards";
import { MockData, PageData } from "../Assets/MockData";
import OverlayFeature from "../Components/OverlayFeature";
import MidPageAd from "../Components/MidPageAd/MidPageAd.js";
import HomeAccordion from "../Components/HomeAccordion/HomeAccordion";
import BottomPageAd from "../Components/BottomPageAd/BottomPageAd";

const Home = () => {
  return (
    <div className="home-container">
      {/* <OverlayFeature /> */}
      <h1>New Releases</h1>
      <div className="cards-container">
        {MockData.map((frames) => {
          return (
            <HomeCards
              key={frames._id}
              id={frames._id}
              image={frames.image}
              frameName={frames.frameName}
              color={frames.color}
              rating={frames.rating}
              numReviews={frames.numReviews}
            />
          );
        })}
      </div>
      {/* <MidPageAd /> */}
      {/* <HomeAccordion /> */}
      {/* <BottomPageAd
        featureImg={PageData.home.image}
        altText={PageData.home.altText}
        title={PageData.home.title}
        body={PageData.home.body}
      /> */}
    </div>
  );
};

export default Home;
