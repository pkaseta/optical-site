import React from "react";
import { Carousel } from "react-bootstrap";
import Eyeball from "../Assets/eyeball.jpeg";
import GlassesCity from "../Assets/glasses-city.jpeg";
import Woman from "../Assets/woman.jpeg";

const ImageCarousel = () => {
  return (
    <div
      className="home-ad-container"
      style={{ backgroundImage: `url(${GlassesCity})` }}
    ></div>
  );
};

export default ImageCarousel;
