import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./SkillTree.css";
import Collapser from "../../../Collapser";

function SkillTree({skills, titleKey, last, parentLast=[], level=0, title}) {
    const { t } = useTranslation();
    const [showSkills, setShowSkills] = useState(true);

    const margin = <>&nbsp;&nbsp;&nbsp;</>;

    return(
        <div className="skill-tree">
            {
                skills &&
                <Collapser
                    header={
                        <div
                        >
                            <span className="skills-highlight">
                                { margin }
                                {
                                    level !== 0 && 
                                    parentLast.map(p => `${p ? "\xa0" : "│"}\xa0`)
                                }
                                { last ? "╰" : "├" }─
                                { showSkills ? "┬": "─"}─
                            </span>
                            <span
                                className={`skills-highlight${title ? " skill-tree-title" : ""}`}
                            >
                                &nbsp;{t(titleKey)}
                                <Collapser.Chevron />
                            </span>

                        </div>
                    }
                    collapsed={!showSkills}
                    collapse={() => {
                        if(skills) {
                            setShowSkills(!showSkills);
                        }
                    }}
                    content={
                        <>
                            <span className="skills-highlight">
                                { margin }
                                {
                                    parentLast.map(p => `${p ? "\xa0" : "│"}\xa0`)
                                }
                                { last ? " " : "│" }&nbsp;│
                            </span>
                            {
                                Array.isArray(skills) &&
                                skills.map((v, i) => {
                                    return (
                                        <SkillTree
                                            key={`skill-${v}`}
                                            titleKey={v}
                                            last={i === skills.length - 1}
                                            level={level + 1}
                                            parentLast={[...parentLast, last]}
                                        />
                                    )
                                })
                            }
                            {
                                !Array.isArray(skills) &&
                                Object.keys(skills).map((v, i) => {
                                    return (
                                        <SkillTree
                                            key={`skill-${v}`}
                                            titleKey={v}
                                            last={i === Object.keys(skills).length - 1}
                                            skills={skills[v]}
                                            level={level + 1}
                                            parentLast={[...parentLast, last == true]}
                                        />
                                    )
                                })
                            }
                        </>
                    }
                />
            }
            {
                !skills && 
                <div
                >
                    { margin }
                    <span className="skills-highlight">
                        {
                            level !== 0 && 
                            parentLast.map(p => `${p ? "\xa0" : "│"}\xa0`)
                        }
                        { last ? "╰" : "├" }───
                    </span>
                    &nbsp;{t(titleKey)}
                </div>
            }
            {
                parentLast.at(-1) === false && last &&
                <div className="skills-highlight">
                    { margin }
                    {
                        parentLast.map(p => `${p ? "\xa0" : "│"}\xa0`)
                    }
                    { last ? " " : "│" }&nbsp;
                </div>
            }
        </div>
    )
}

export default SkillTree;