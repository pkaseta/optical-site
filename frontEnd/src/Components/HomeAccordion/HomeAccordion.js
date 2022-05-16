import React from "react";
import { Accordion } from "react-bootstrap";
import HomeCards from "../HomeCards";
import { MockData } from "../../Assets/MockData";

import "./HomeAccordion.scss";

const HomeAccordion = () => {
  return (
    <div className="home-accordion">
      <Accordion
        defaultActiveKey="1"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Accordion.Item eventKey="0" style={{ width: "90%", margin: "10px" }}>
          <Accordion.Header>Mens Top Styles</Accordion.Header>
          <Accordion.Body
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {MockData.map((frames) => {
              return (
                <HomeCards
                  image={frames.image}
                  frameName={frames.frameName}
                  color={frames.color}
                />
              );
            })}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" style={{ width: "90%", margin: "10px" }}>
          <Accordion.Header>Womens Top Styles</Accordion.Header>
          <Accordion.Body
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {MockData.map((frames) => {
              return (
                <HomeCards
                  image={frames.image}
                  frameName={frames.frameName}
                  color={frames.color}
                />
              );
            })}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" style={{ width: "90%", margin: "10px" }}>
          <Accordion.Header>Kids Top Styles</Accordion.Header>
          <Accordion.Body
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {MockData.map((frames) => {
              return (
                <HomeCards
                  image={frames.image}
                  frameName={frames.frameName}
                  color={frames.color}
                />
              );
            })}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default HomeAccordion;
