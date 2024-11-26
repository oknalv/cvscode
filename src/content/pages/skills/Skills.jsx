import React from "react";
import { useTranslation } from "react-i18next";
import "./Skills.css";
import SkillTree from "./SkillTree";
import PageImg from "../PageImg";

const technical = {
    "programming": {
        "front_end": ["HTML", "CSS", "JavaScript", "Typescript", "Angular", "RxJS", "SASS/SCSS", "Webpack", "React"],
        "back_end": ["Java", "Python", "JavaScript", "Spring", "OpenAPI", "JMS", "JDBC"],
        "SQL": ["MySQL", "Sybase ASE"],
        "transversal": ["Git", "Linux Shell"]
    },
    "methodologies": ["Scrum", "Kanban"],
}

const languages = ["spanish", "galician", "english", "portuguese", "french", "polish", "finnish"]

function Skills({fontSize}) {
    const { t } = useTranslation();
    return(
        <div className="skills">
            <PageImg
                src="/img/me.png"
                size={4}
                fontSize={fontSize}
            />
            <span className="skills-highlight">
                <br />
                &nbsp;&nbsp;&nbsp;│
            </span>
            <SkillTree
                skills={technical}
                titleKey="technical"
                title={true}
            />
            <SkillTree
                skills={languages}
                titleKey="languages"
                title={true}
                last={true}
            />
        </div>
    )
}

export default Skills;