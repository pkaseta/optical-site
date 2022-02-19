import React from "react";
import { Card, Button } from "react-bootstrap";

const HomeCards = (props) => {
  return (
    <div className="card-container">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.frameName}</Card.Title>
          <Card.Text>{props.color}</Card.Text>
          <Button variant="dark">Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomeCards;
