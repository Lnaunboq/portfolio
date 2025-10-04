// src/components/Header.jsx
import React from "react";
import { useLang } from "../i18n/LanguageContext";

export default function Header() {
  const { lang, switchLang } = useLang();

  return (
    <header className="header">
      <h1>Portfolio</h1>
    </header>
  );
}
