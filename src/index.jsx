import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";

const languages = import.meta.glob("./i18n/*.json", {eager: true});

const resources = Object.keys(languages).reduce((a, l) => {
    a[l.replace("./i18n/", "").replace(".json", "")] = { translation: languages[l]};
    return a;
}, {})
console.log(resources);
const fallbackLng = Object.keys(resources);
if(window.localStorage.getItem("lang") === null) {
    const browserLanguage = navigator.language.split("-")[0];
    window.localStorage.setItem("lang", fallbackLng.includes(browserLanguage) ? browserLanguage : "en");
}

i18n.use(initReactI18next).init({
    resources,
    lng: window.localStorage.getItem("lang"),
    fallbackLng
});

if(window.localStorage.getItem("theme") === null) {
    window.localStorage.setItem("theme", "dark");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)