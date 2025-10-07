import React from "react";
import { useLang } from "../i18n/LanguageContext";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const { t } = useLang();

  return (
    <div className="container projects">
      <h3>{t.projects.title}</h3>
      <div className="grid">
        {t.projects.items.map((p, index) => (
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
