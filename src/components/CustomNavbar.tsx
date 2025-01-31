import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./CustomNavbar.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const CustomNavbar = () => {
  const [lastScroll, setLastScroll] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  document.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    if (lastScroll > scrolled) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
    setLastScroll(scrolled);
  });
  return (
    <div>
      <Navbar
        expand="lg"
        className={`  container-navbar ${
          showNavbar ? "visible" : "not-visible"
        }`}
      >
        <Container className="custom-navbar">
          <Navbar.Brand href="#home" className="brand-navbar">
            Pedagogista
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default CustomNavbar;
