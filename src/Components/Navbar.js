import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Stack from "react-bootstrap/Stack";
import { Button, Col, Container, Row } from "react-bootstrap";

class NavbarComponent extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" style={{ width: "100%" }}>
        <Container>
          <Nav className="me-auto">
            <Stack direction="horizontal" gap={2}>
              <Button onClick={this.props.jared}>Side Menu</Button>
              {/* <Navbar.Brand> */}
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
              {/* </Navbar.Brand> */}
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contactus">
                Contact Us
              </Nav.Link>
            </Stack>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
export default NavbarComponent;
