import React from "react";
import { useLang } from "../i18n/LanguageContext";
import ProjectCard from "../components/ProjectCard";

export default function About() {
  const { t } = useLang();

  return (
    <div className="container games">
      <h3>{t.games.title}</h3>
      <div className="grid">
        {t.games.items.map((p, index) => (
          <ProjectCard
            key={index}
            title={p.title}
            technology={p.technology}
            description={p.description}
            repositoryLink={p.repositoryLink}
            repositoryText={p.repositoryText}
          />
        ))}
      </div>
    </div>
  );
}
