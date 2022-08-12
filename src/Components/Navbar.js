import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Navbar.Brand>
        <Nav className="me-auto"> 
          <Stack direction="horizontal" gap={2}>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>

            <Nav.Link as={Link} to="/contactus">
              Contact Us
            </Nav.Link>
          </Stack>
        </Nav>

        {/* <Stack direction="horizontal" gap={2}>
          <Button as="a" variant="primary">
            Button as link
          </Button>
          <Button as="a" variant="success">
            Button as link
          </Button>
        </Stack> */}

      </Container>
    </Navbar>
  )
}
export default NavbarComponent; 