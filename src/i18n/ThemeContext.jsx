import React, { createContext, useState, useContext, useEffect } from "react";
import themes from "./themes.json";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const root = document.documentElement;
        const currentTheme = themes[theme] || themes["light"];
        Object.keys(currentTheme).forEach(key => {
            root.style.setProperty(`--${key}`, currentTheme[key]);
        });
    }, [theme]);


    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
