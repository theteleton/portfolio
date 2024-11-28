import React from "react";
import "./NavigationBar.css";
import NavigationBarButtons from "./NavigationBarButton";
import { Button } from "flowbite-react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavDropdown } from "react-bootstrap";
import Container from 'react-bootstrap/Container'
import "bootstrap/dist/css/bootstrap.min.css";

function NavigationBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        /*<div className="navbar">
            <div className="flex flex-wrap gap-2">
                {NavigationBarButtons.map((button, index) => (
                    <Button gradientDuoTone="purpleToBlue" id="{index}" className="navbutton">{button.name}</Button>
                ))}
            </div>
        </div>*/
    );
}

export default NavigationBar;


