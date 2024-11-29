import React from "react";
import Icon from "../../Icon";
import "./SectionSelector.css"
import SectionSelectorElement from "./SectionSelectorElement";

function SectionSelector(props) {
    return (
        <div className="section-selector">
            <SectionSelectorElement
                icon={<Icon icon="F" />}
                selected={props.selector === "home"}
                onClick={() => {
                    props.selectSelector(props.selector === "home" ? null : "home")
                }}
            />
            <SectionSelectorElement
                icon={<Icon icon="C" />}
                selected={props.selector === "settings"}
                onClick={() => {
                    props.selectSelector(props.selector === "settings" ? null : "settings")
                }}
            />
        </div>
    )
}

export default SectionSelector;
