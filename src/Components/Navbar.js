import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Stack from "react-bootstrap/Stack";
import { Button, Col, Container, Row } from "react-bootstrap";

class NavbarComponent extends React.Component {
  render() {
    return (
      <Navbar
        bg="dark"
        variant="dark"
        collapseOnSelect
        expand="lg"
        style={{ width: "100%" }}
      >
        <Container>
          <Nav className="mr-auto">
            <Button onClick={this.props.jared}>Side Menu</Button>
          </Nav>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contactus">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default NavbarComponent;
