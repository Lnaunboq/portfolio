import React, { createContext, useState, useContext } from "react";
import fr from "./fr.json";
import en from "./en.json";

const languages = { fr, en };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState("fr");

    const toggleLang = () => {
        setLang((prev) => (prev === "fr" ? "en" : "fr"));
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: languages[lang] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLang() {
    return useContext(LanguageContext);
}
