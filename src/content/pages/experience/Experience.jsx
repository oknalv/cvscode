import React from "react";
import { useTranslation } from "react-i18next";
import "./Experience.css";
import PageImg from "../PageImg";

const experience = [
    {
        from: '2024/03',
        to: 'present',
        title: 'full_stack',
        place: 'bnp',
        description: 1,
        images: ['bnp.jpeg']
    },
    {
        from: '2021/03',
        to: '2024/03',
        title: 'consultant_sw_engineer',
        place: 'agap2',
        description: 1,
        images: ['agap2.jpeg', 'bnp.jpeg']
    },
    {
        from: '2020/11',
        to: '2021/03',
        title: 'consultant_sw_engineer',
        place: 'altran',
        description: 1,
        images: ['altran.jpeg', 'klx.jpeg']
    },
    {
        from: '2018/08',
        to: '2019/10',
        title: 'consultant_sw_engineer',
        place: 'akka',
        description: 3,
        note: true,
        images: ['akka.jpeg']
    },
    {
        from: '2017/05',
        to: '2018/05',
        title: 'sw_engineer',
        place: 'imatia',
        description: 1,
        images: ['imatia.jpeg', 'inditex.jpeg']
    },
    {
        from: '2017/01',
        to: '2017/05',
        title: 'junior',
        place: 'plexus',
        description: 1,
        images: ['plexus.jpeg', 'barcelo.jpeg']
    },
    {
        from: '2016/08',
        to: '2016/12',
        title: 'sw_engineer_rd',
        place: 'redegal',
        description: 2,
        images: ['redegal.jpeg']
    },
    {
        from: '2012/04',
        to: '2012/06',
        title: 'intern',
        place: 'bueu',
        description: 1,
        images: ['bueu.png']
    }
]

function Experience({fontSize}) {
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
                                                src={`/img/${img}`}
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
                                            <span className="exp-note">{t(`${e.place}_note`)}</span> {t(e.note)}
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