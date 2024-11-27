import React from "react";
import "./NavigationBar.css";
import NavigationBarButtons from "./NavigationBarButton";
import { Button } from "flowbite-react";

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


