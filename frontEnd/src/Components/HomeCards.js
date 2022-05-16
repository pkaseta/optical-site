import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Ratings from "./Ratings/Ratings";

const HomeCards = (product) => {
  return (
    <div className="card-container">
      <Card style={{ width: "18rem" }}>
        <Link to={`../Assets/MockData.js/${product.id}`}>
          <Card.Img variant="top" src={product.image} />
        </Link>
        <Card.Body>
          <Card.Title>{product.frameName}</Card.Title>
          <Card.Text>{product.color}</Card.Text>
          <Card.Text>
            <Ratings
              value={product.rating}
              text={
                product.numReviews === 1
                  ? `${product.numReviews} review`
                  : `${product.numReviews} reviews`
              }
            />
          </Card.Text>
          {/* <Button variant="dark">Add to cart</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomeCards;
