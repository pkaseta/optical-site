import React from "react";
import { Button } from "react-bootstrap";

const OverlayFeature = () => {
  return (
    <div className="overlay-feature">
      <div className="media-container"></div>
      <div className="text-card">
        <div className="title">2 Pairs for only $49</div>
        <div className="body">
          Includes any 2 frames. Single vision prescription lenses*, non-glare
          lens treatment.
        </div>
        <div className="buttons">
          <Button variant="secondary">Button 1</Button>
          <Button variant="secondary">Button 2</Button>
        </div>
      </div>
    </div>
  );
};

export default OverlayFeature;
