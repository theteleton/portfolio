import React from 'react';

class LinkBarButton {
    name: string;
    image_path: string;

    constructor(name: string, image_path: string) {
        this.name = name;
        this.image_path = image_path;
    }
}

const LinkBarButtons = [
    new LinkBarButton("github", "../../public/github.png"),
    new LinkBarButton("linkedin", "../../public/linkedin.png"),
    new LinkBarButton("researchgate", "../../public/researchgat.png"),
    new LinkBarButton("scholar", "../../public/scholar.png"),
    new LinkBarButton("x", "../../public/x.png"),
    new LinkBarButton("codeforces", "../../public/codeforces.png")
]