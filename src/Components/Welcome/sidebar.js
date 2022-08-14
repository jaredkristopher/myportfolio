import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import './Dashboard.css'
import { Link } from "react-router-dom";


class Sidebar extends React.Component {

    state = { isActive: this.props.isActive };

    handleToggle = () => {
    this.setState({ isActive: !this.props.isActive });
    };

    render() {
        const isActive = this.props.isActive;

        return (
            <Navbar collapseOnSelect variant="dark" className={isActive ? "d-md-block bg-light sidebar" : "d-none bg-light sidebar"}>
                <Nav
                    activeKey="/home"
                    // onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                    style={{flexDirection: "column"}}
                >
                    <div className="sidebar-sticky"></div>
                    <Nav.Item >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link as={Link} to="/contactus">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        );
    }
}

export default Sidebar;

