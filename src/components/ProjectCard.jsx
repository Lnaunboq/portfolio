import React from "react";

export default function ProjectCard({ title, description }) {
  return (
    <article className="card">
      <h4>{title}</h4>
      <p>{description}</p>
    </article>
  );
}
