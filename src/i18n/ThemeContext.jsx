import React, { createContext, useState, useContext, useEffect } from "react";
import themes from "./themes.json";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const getPreferredTheme = () => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  };

  const [theme, setTheme] = useState(getPreferredTheme());

  const switchTheme = (newTheme) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    const themeColors = themes[theme]?.colors || {};
    Object.entries(themeColors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setTheme(e.matches ? "dark" : "light");

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  return useContext(ThemeContext);
}
