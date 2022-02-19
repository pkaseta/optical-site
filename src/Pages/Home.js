import React from "react";
import HomeAd from "../Components/HomeAd";
import HomeCards from "../Components/HomeCards";
import { MockData } from "../Assets/MockData";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <HomeAd />
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

export default Home;
