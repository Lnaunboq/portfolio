import React from "react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({
  title,
  technology,
  description,
  repositoryLink,
  repositoryText,
}) {
  const formattedTech = technology
    .split(",")
    .map((t) => t.trim())
    .join(" • ");
  const links = repositoryLink.split(" - ").map((link) => link.trim());
  const linksTexts = (repositoryText || "")
    .split(" - ")
    .map((text) => text.trim());

  return (
    <div className="card project-card">
      <h4 className="project-title">{title}</h4>
      <p className="project-tech">{formattedTech}</p>
      <p className="project-desc">{description}</p>

      <div className="project-links">
        {links.map((link, i) => (
          <a
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FaGithub className="github-icon" /> {linksTexts[i] || "Github"}
          </a>
        ))}
      </div>
    </div>
  );
}
