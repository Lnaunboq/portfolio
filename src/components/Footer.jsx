import React from "react";
import { useTheme } from "../i18n/ThemeContext";
import { useLang } from "../i18n/LanguageContext";

export default function Footer() {
  useTheme();
  const { t } = useLang();

  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Matteo Tani — <a href="/resume.pdf" target="_blank">{t.footer.resume}</a></p>
      </div>
    </footer>
  );
}
