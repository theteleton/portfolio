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
        
        <div className="navbar">
            <div className="flex flex-wrap gap-2">
                {NavigationBarButtons.map((button, index) => (
                    <Button gradientDuoTone="purpleToBlue" id="{index}" className="navbutton">{button.name}</Button>
                ))}
            </div>
        </div>
    );
}

export default NavigationBar;


