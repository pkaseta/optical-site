import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Ratings from "../../Components/Ratings/Ratings";
import {
  Button,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";

const ProductScreen = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);

      setProduct(data);
    };

    fetchProduct();
  }, [id]);
  //   const product = MockData.find((p) => p._id === Number(id));
  //   console.log(product);

  return (
    <div>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col
          md={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            // className="m-auto"
            src={product.image}
            alt={product.frameName}
            fluid
          />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.frameName}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Ratings
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                className="btn-block"
                type="button"
                variant="dark"
                disabled={product.countInStock === 0 && !product.available}
              >
                {!product.available && product.countInStock < 1
                  ? "Unavailable"
                  : "Add To Cart"}
              </Button>
            </ListGroup.Item>
            {product.available && product.countInStock === 0 ? (
              <ListGroup.Item>
                <h5>Please allow 2-4 extra business days for delivery</h5>
              </ListGroup.Item>
            ) : (
              ""
            )}
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
