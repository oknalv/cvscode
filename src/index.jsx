import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ReactDOM from "react-dom/client";
import React, { createContext } from "react";
import App from "./App";
import "./index.css";

const DataContext = createContext();
const homeUrl = import.meta.env.VITE_HOME_URL;

const resources = {
    en: { translation: await (await fetch(`${homeUrl}i18n/en.json`)).json()},
    es: { translation: await (await fetch(`${homeUrl}i18n/es.json`)).json()},
    gl: { translation: await (await fetch(`${homeUrl}i18n/gl.json`)).json()},
    pt: { translation: await (await fetch(`${homeUrl}i18n/pt.json`)).json()}
}

const data = await (await fetch(`${homeUrl}data/data.json`)).json();

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
        <DataContext.Provider value={data}>
            <App />
        </DataContext.Provider>
    </React.StrictMode>
)

export default DataContext;