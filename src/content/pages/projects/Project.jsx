import React, { useState } from "react";
import "./Project.css";
import PageImg from "../PageImg";
import { useTranslation } from "react-i18next";
import Collapser from "../../../Collapser";

function Project({project, fontSize, theme}) {
    const { t } = useTranslation();
    const [showProject, setShowProject] = useState(false);
    const [showScreenshots, setShowScreenshots] = useState(true); //TODO true
    const [showVideo, setShowVideo] = useState(true);

    return(
        <div className="project">
            <Collapser
                header={
                    <div
                        className="project-header"

                    >
                        <div className="project-name">
                            <PageImg
                                size={2}
                                src={`./img/${project.name}${project.themed ? `_${theme}` : ""}.svg`}
                                fontSize={fontSize}
                            />
                            {
                                project.title &&
                                <>
                                    &nbsp;{t(project.name)}
                                </>
                            }
                        </div>
                        <div>
                            {t(`${project.name}_header`)}
                            <Collapser.Chevron />
                        </div>
                    </div>
                }
                collapsed={!showProject}
                collapse={() => setShowProject(!showProject)}
                content={
                    <div className="project-body">
                        <br />
                        {
                            project.page &&
                            <div className="project-bullet">
                                {t("page")} <a href={project.page} target="_blank" rel="noopener noreferrer">{project.page}</a>
                            </div>

                        }
                        <div className="project-bullet">
                            {t("code")}&nbsp;
                            {
                                project.code.length > 1 &&
                                project.code.map((c, i) => {
                                    return (
                                        <div key={`project-${project.name}-code${i}`}>
                                            &nbsp;&nbsp;
                                            <span className="project-bullet">
                                                <a href={c} target="_blank" rel="noopener noreferrer">{c}</a>
                                            </span>
                                        </div>
                                    )
                                })
                            }
                            {
                                project.code.length == 1 &&
                                <span>
                                    <a href={project.code[0]} target="_blank" rel="noopener noreferrer">{project.code[0]}</a>
                                </span>
                            }
                        </div>
                        {
                            project.screenshots > 0 &&
                            <Collapser
                                header={
                                    <div className="project-bullet">
                                        {t("screenshots")}<Collapser.Chevron/>
                                    </div>
                                }
                                collapsed={!showScreenshots}
                                collapse={() => setShowScreenshots(!showScreenshots)}
                                content={
                                    <div className="project-screenshots">
                                        <br />
                                        {
                                            [...Array(project.screenshots).keys()].map((s, i) => {
                                                return (
                                                    <PageImg
                                                        src={`./img/${project.name}_${s}.png`}
                                                        fontSize={fontSize}
                                                        size={10}
                                                        key={`project-${project.name}-screenshot${i}`}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                }
                            />

                        }
                        {
                            project.youtube &&
                            <Collapser
                                header={
                                    <div className="project-bullet">
                                        {t("video")}<Collapser.Chevron/>
                                    </div>
                                }
                                collapsed={!showVideo}
                                collapse={() => setShowVideo(!showVideo)}
                                content={
                                    <div className="project-video">
                                        <br />
                                        <iframe
                                            width={fontSize[1] * 32}
                                            height={fontSize[1] * 18}
                                            src={`https://www.youtube.com/embed/${project.youtube}`}
                                            style={{border: "0px"}}
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen>
                                        </iframe>
                                    </div>
                                }
                            />

                        }
                        <br />
                        <div className="project-description">
                            {
                                [...Array(project.description).keys()].map((d, i) => {
                                    return (
                                        <div key={`project-${project.name}-description${i}`}>
                                            <div>
                                                {t(`${project.name}${d}`)}
                                            </div>
                                            {
                                                d < project.description -1 && <br />
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
            />
        </div>
    )
}

export default Project;