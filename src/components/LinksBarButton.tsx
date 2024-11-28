import React from 'react';

class LinkBarButton {
    name: string;
    image_path: string;
    link: string;

    constructor(name: string, image_path: string, link: string) {
        this.name = name;
        this.image_path = image_path;
        this.link = link;
    }
}

const LinkBarButtons = [
    new LinkBarButton("github", "../../public/github2.png", "https://github.com/theteleton"),
    new LinkBarButton("linkedin", "../../public/linkedin.2png", "https://www.linkedin.com/in/ilija-t-bb4b25110/"),
    new LinkBarButton("researchgate", "../../public/researchgate2.png", "https://www.researchgate.net/profile/Ilija-Tavchioski"),
    new LinkBarButton("scholar", "../../public/scholar2.png", "https://scholar.google.com/citations?user=ag_Sr1MAAAAJ&hl=en"),
    new LinkBarButton("x", "../../public/x.png", "https://x.com/theteleton"),
    new LinkBarButton("codeforces2", "../../public/codeforces.png", "https://codeforces.com/profile/iletavcioski")
]

export default LinkBarButtons;