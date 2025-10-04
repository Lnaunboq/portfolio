import React from "react";
import { useLang } from "../i18n/LanguageContext";

export default function About() {
  const { t } = useLang();

  return (
    <div className="container about">
      <h3>{t.about.title}</h3>
      <p>{t.about.text}</p>
    </div>
  );
}
