import React from "react";
import { useTranslation } from "react-i18next";
import "./Warning.css";

function Warning() {
    const { t } = useTranslation();
    return(
        <div className="warning">
            <div className="warning-title">
                {t("warning")}
            </div>
            <br />
            <div>
                {t("warning_mobile")}
            </div>
            <br />
            <a href="/">{t("go_mobile")}</a>
        </div>
    )
}

export default Warning;