import React from "react";
import { useLang } from "../i18n/LanguageContext";

export default function Header() {
  const { t, toggleLang } = useLang();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <h1 className="logo">Matteo Tani</h1>
        <nav>
          <a href="#home">{t.header.home}</a>
          <a href="#projects">{t.header.projects}</a>
          <a href="#about">{t.header.about}</a>
          <a href="#contact">{t.header.contact}</a>
        </nav>
        <button onClick={toggleLang} className="lang-btn">
          {t.header.lang}
        </button>
      </div>
    </header>
  );
}
