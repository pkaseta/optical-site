import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const HeaderNav = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand>Optical Site</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link href="/Mens">Mens</Nav.Link>
              <Nav.Link href="/Womens">Womens</Nav.Link>
              <Nav.Link href="/Kids">Kids</Nav.Link>
              <Nav.Link href="/Sunglasses">Sunglasses</Nav.Link>
              <Nav.Link href="/Contacts">Contacts</Nav.Link>
            </Nav>
            <Nav className="ml-auto my-2 my-lg-0">
              <Nav.Link href="/Cart">
                <i className="fas fa-shopping-cart"></i> Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <i className="fas fa-user"></i> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default HeaderNav;
