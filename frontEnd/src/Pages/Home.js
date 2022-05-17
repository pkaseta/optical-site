import React, { useEffect, useState } from "react";
import HomeCards from "../Components/HomeCards";
import axios from "axios";
import OverlayFeature from "../Components/OverlayFeature";
import MidPageAd from "../Components/MidPageAd/MidPageAd.js";
import HomeAccordion from "../Components/HomeAccordion/HomeAccordion";
import BottomPageAd from "../Components/BottomPageAd/BottomPageAd";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");

      setProducts(data);
    };

    fetchProducts();
  }, []);
  return (
    <div className="home-container">
      {/* <OverlayFeature /> */}
      <h1>New Releases</h1>
      <div className="cards-container">
        {products.map((frames) => {
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
