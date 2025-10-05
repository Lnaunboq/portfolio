import React, { createContext, useState, useContext } from "react";
import fr from "./fr.json";
import en from "./en.json";

const translations = { fr, en };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState("fr");

    const switchLang = (newLang) => {
        setLang(newLang);
    };

    const t = translations[lang];

    return (
        <LanguageContext.Provider value={{ lang, switchLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
    return useContext(LanguageContext);
}
