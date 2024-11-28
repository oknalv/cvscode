import React from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";

function Header() {
    const { t } = useTranslation();
    return(
        <div className="header">
            <img src={`${import.meta.env.VITE_HOME_URL}img/me.png`} alt="me"/> Eliot Blanco Lebrero, {t("header").toLowerCase()}
        </div>
    )
}

export default Header;