import React from "react";
import Project from "./Project";
import "./Projects.css";

const projects = [
    {
        "name": "oppi",
        "page": "https://oknalv.github.io/oppi",
        "code": [
            "https://github.com/oknalv/oppi"
        ],
        "screenshots": 6,
        "description": 3
    },
    {
        "name": "piollo",
        "themed": true,
        "code": [
            "https://github.com/oknalv/piollo"
        ],
        "description": 1
    },
    {
        "name": "serkis",
        "title": true,
        "code": [
            "https://github.com/oknalv/serkisplugin",
            "https://github.com/oknalv/keypointextractor"
        ],
        "description": 2,
        "youtube": "lC0uXMhHwX8"
    },
    {
        "name": "grissonne",
        "page": "https://oknalv.github.io/grissonne",
        "code": [
            "https://github.com/oknalv/grissonne"
        ],
        "description": 1
    }
]

function Projects({fontSize, theme}) {
    return(
        <div className="projects">
            {
                projects.map((p, i) => {
                    return(
                        <div key={`project${i}`}>
                            <Project project={p} fontSize={fontSize} theme={theme} />
                            {
                                i < projects.length - 1 &&
                                <>
                                    <br />
                                    <br />
                                </>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Projects;