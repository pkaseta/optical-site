import React from "react";

//Styles Import
import "./mens.scss";

//Data Import
import { PageData, MockData } from "../../Assets/MockData";

//Components Import
import BottomPageAd from "../../Components/BottomPageAd/BottomPageAd";
import HomeCards from "../../Components/HomeCards";
import MidPageAd from "../../Components/MidPageAd/MidPageAd";

const Mens = () => {
  return (
    <div className="mens-page">
      <BottomPageAd
        featureImg={PageData.mens.image}
        altText={PageData.mens.altText}
        title={PageData.mens.title}
        body={PageData.mens.body}
      />
      <div className="mid-page-add">
        <MidPageAd />
      </div>
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
    </div>
  );
};

export default Mens;
