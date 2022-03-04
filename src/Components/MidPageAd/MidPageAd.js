import React from "react";
import { Card } from "react-bootstrap";
import DetroitSkyline from "../../Assets/detroit-skyline.jpeg";
import ARCoating from "../../Assets/ar-coating.jpeg";
import Transitions from "../../Assets/transitions.jpeg";

import "../MidPageAd/MidPageAd.scss";

const MidPageAd = () => {
  const arCardImages = [
    {
      title: "In The Heart Of The D",
      body: "All glasses proudly manufactured and shipped here in Metro Detroit",
      src: DetroitSkyline,
    },
    {
      title: "Non-Glare Treatment",
      body: "All of our glasses (excluding tinted lenses) come with a non-glare treatment, free of charge!",
      src: ARCoating,
    },
    {
      title: "Color Changing Lenses",
      body: "Color changing lens options now available!",
      src: Transitions,
    },
  ];
  return (
    <div className="mid-page-ad">
      {arCardImages.map((image) => {
        return (
          <Card style={{ width: "30%", height: "400px" }}>
            <Card.Img
              variant="top"
              src={image.src}
              style={{ height: "310px", objectFit: "fill" }}
            />
            <Card.Body style={{ height: "112px" }}>
              <Card.Title>{image.title}</Card.Title>
              <Card.Text>{image.body}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default MidPageAd;
