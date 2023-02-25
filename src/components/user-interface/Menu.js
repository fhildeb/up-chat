import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Menu = () => {
  /**
   * Using React Router DOM:
   *
   * import { Link } from "react-router-dom";
   * <Link to="/">Home</Link>
   */

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/landing">
          <img
            src="logo.png"
            height="30"
            className="d-inline-block align-top"
            alt="Application Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-evenly">
            <Nav.Link href="/chat">Chat</Nav.Link>
            <Nav.Link href="/friendlist">Friendlist</Nav.Link>
            <Nav.Link href="/reputation">Reputation</Nav.Link>
            <NavDropdown title="Help" id="basic-nav-dropdown">
              <NavDropdown.Item href="/landing">Features</NavDropdown.Item>
              <NavDropdown.Item href="/onboarding">Onboarding</NavDropdown.Item>
              <NavDropdown.Item href="/faq">FAQ</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
