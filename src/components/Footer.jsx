import React from "react";
import { useTheme } from "../i18n/ThemeContext";

export default function Footer() {
  const { theme, setTheme } = useTheme();

  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Matteo Tani — <a href="/resume.pdf" target="_blank">Télécharger CV</a></p>
      </div>
      <label>
        Thème :
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
    </footer>
  );
}
