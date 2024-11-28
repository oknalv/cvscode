import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import "./Skills.css";
import SkillTree from "./SkillTree";
import PageImg from "../PageImg";
import DataContext from "../../..";


function Skills({fontSize}) {
    const skills = useContext(DataContext).skills;
    const { t } = useTranslation();
    return(
        <div className="skills">
            <PageImg
                src="./img/me.png"
                size={4}
                fontSize={fontSize}
            />
            <span className="skills-highlight">
                <br />
                &nbsp;&nbsp;&nbsp;│
            </span>
            <SkillTree
                skills={skills.technical}
                titleKey="technical"
                title={true}
            />
            <SkillTree
                skills={skills.languages}
                titleKey="languages"
                title={true}
                last={true}
            />
        </div>
    )
}

export default Skills;