import React from "react";
import { useTranslation } from "react-i18next";
import "./Collapser.css";
import Icon from "./Icon";

function Collapser({header, content, collapsed, collapse}) {
    const { t } = useTranslation();
    return(
        <div className="collapser">
            <div
                className={`collapser-header${!collapsed ? " collapser-header-open" : ''}`}
                onClick={collapse}
            >
                {header}
            </div>
            <div
                className={collapsed ? "collapser-content-hidden" : ""}
            >
                {content}
            </div>
        </div>
    )
}

function CollapserChevron() {
    return(
        <span className="collapser-chevron">
            <Icon icon="D" />
        </span>
    )
}

Collapser.Chevron = CollapserChevron;

export default Collapser;