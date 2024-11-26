import React from "react";

class NavigationBarButton {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

}

const NavigationBarButtons = [
    new NavigationBarButton("WhoAmI"),
    new NavigationBarButton("Experience"),
    new NavigationBarButton("Education"),
    new NavigationBarButton("Research"),
    new NavigationBarButton("Projects"),
    new NavigationBarButton("Contact")
];

export default NavigationBarButtons;