import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import "./Experience.css";
import PageImg from "../PageImg";
import DataContext from "../../..";


function Experience({fontSize}) {
    const experience = useContext(DataContext).experience;
    const { t } = useTranslation();
    return(
        <div className="experience">
            {
                experience.map((e, i) => {
                    return (
                        <div
                            key={`experience${i}`}
                        >
                            <div>
                                {
                                    e.images?.map((img, j) => {
                                        return (
                                            <PageImg
                                                src={`${import.meta.env.VITE_HOME_URL}img/${img}`}
                                                fontSize={fontSize}
                                                size={3}
                                                key={`experience${i}-img${j}`}
                                            />
                                        )
                                    })
                                }
                            </div>
                            <div className="exp-title">{t(e.title)}</div>
                            <div className="exp-2">
                                <div className="exp-place">{t(e.place)}</div>
                                <div className="exp-period">{e.from} - {t(e.to)}</div>
                                {
                                    [...Array(e.description).keys()].map((d, j) => {
                                        return (
                                            <div key={`experience${i}-${j}`}>
                                                <br/>
                                                <div
                                                    key={`experience${i}-description${j}`}
                                                    className="exp-4"
                                                >- {t(`${e.place}${d}`)}</div>
                                            </div>
                                        )
                                    })
                                }
                                {
                                    e.note &&
                                    <>
                                        <br />
                                        <div>
                                            <span className="exp-note">{t("note")}</span> {t(`${e.place}_note`)}
                                        </div>
                                    </>
                                }
                            </div>
                            {
                                i < experience.length - 1 && <><br /><br /></>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Experience;