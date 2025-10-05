import React from "react";
import { NavLink } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";
import ThemeCombo from "./ThemeCombo";

export default function Sidebar() {
  const { lang, switchLang, t } = useLang();

  return (
    <aside className="sidebar">
      <ThemeCombo />

      <nav>
        <NavLink to="/" end>
          {t.menu.home}
        </NavLink>
        <NavLink to="/projects">{t.menu.projects}</NavLink>
        <NavLink to="/games">{t.menu.games}</NavLink>
        <NavLink to="/contact">{t.menu.contact}</NavLink>
      </nav>

      <div className="lang-switch">
        <button
          className={lang === "fr" ? "active" : ""}
          onClick={() => switchLang("fr")}
        >
          FR
        </button>
        <button
          className={lang === "en" ? "active" : ""}
          onClick={() => switchLang("en")}
        >
          EN
        </button>
      </div>
    </aside>
  );
}
