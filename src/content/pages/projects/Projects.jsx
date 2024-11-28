import React, { useContext } from "react";
import Project from "./Project";
import "./Projects.css";
import DataContext from "../../..";


function Projects({fontSize, theme}) {
    const projects = useContext(DataContext).projects.filter(p => p.name !== "cvscode");
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