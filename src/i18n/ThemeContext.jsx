import React, { createContext, useState, useContext, useEffect } from "react";
import themes from "./themes.json"; // ✅ import du JSON

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("dark");

    const switchTheme = (newTheme) => {
        setTheme(newTheme);
    };

    // appliquer les variables CSS
    useEffect(() => {
        const themeColors = themes[theme]?.colors || {};
        Object.entries(themeColors).forEach(([key, value]) => {
            document.documentElement.style.setProperty(key, value);
        });
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, switchTheme, themes }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
