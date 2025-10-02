import React from "react";
import { useLang } from "../i18n/LanguageContext";

export default function Home() {
  const { t } = useLang();

  return (
    <div className="container home">
      <h2>{t.home.title}</h2>
      <p>{t.home.subtitle}</p>
      <a className="btn" href="#projects">{t.home.cta}</a>
    </div>
  );
}
