import React, { Fragment, useState } from "react";
import { MemoryRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About/index";
import Contact from "./Components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./Components/Welcome/index";
import { useTitle } from "./Helpers/useTitle";
import { Button, Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Components/Welcome/sidebar";
import "./Components/Welcome/Dashboard.css";

function App() {
  useTitle("My Website");
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <Router>
      <Fragment>
        <Container fluid className="p-0">
          <Row className="g-0">
            <Col id="mySidebar" xs={2}>
              <Sidebar id="mySidebar" isActive={isActive} />
            </Col>
            <Col xs={isActive ? 10 : 12} fluid>
              <Navbar jared={handleToggle} />
              <Routes>
                <Route exact path="/" element={<Welcome />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contactus" element={<Contact />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Fragment>
    </Router>
  );
}
export default App;