import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

/**
 * Functional component that renders a responsive Navbar
 * with NavLinks and a NavDropdown
 *
 * @returns {JSX.Element} Navbar component
 */
const MenuBar = (): JSX.Element => {
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
        <Navbar.Collapse id="basic-navbar-nav" role="navigation">
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

export default MenuBar;
