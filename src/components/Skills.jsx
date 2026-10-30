import React from "react";
import { DataIcon } from "./Icons.jsx";
import S from "../data/site.js";

const skillLogos = {
  Python: ["python"],
  Java: ["java"],
  JavaScript: ["javascript"],
  HTML: ["html5"],
  CSS: ["css3"],
  Dart: ["dart"],
  React: ["react"],
  "Node.js": ["nodejs"],
  "Tailwind CSS": ["tailwindcss"],
  Flutter: ["flutter"],
  Supabase: ["supabase"],
  Git: ["git"],
  GitHub: ["github"],
  "VS Code": ["vscode"],
  Figma: ["figma"],
  Canva: ["canva"],
  PostgreSQL: ["postgresql"],
};

function SkillLogo({ name }) {
  const logos = skillLogos[name] || [];
  if (name === "SQL")
    return (
      <span className="skill-logos" aria-hidden="true">
        <svg className="skill-logo skill-logo--database" viewBox="0 0 24 24">
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
        </svg>
      </span>
    );
  if (logos.length)
    return (
      <span
        className={`skill-logos${logos.length > 1 ? " skill-logos--pair" : ""}`}
        aria-hidden="true"
      >
        {logos.map((logo) => (
          <img
            className={`skill-logo skill-logo--${logo}`}
            key={logo}
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${logo}/${logo}-original.svg`}
            alt=""
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.visibility = "hidden";
            }}
          />
        ))}
      </span>
    );
  return (
    <span className="skill-logos" aria-hidden="true">
      <span className="skill-logo skill-logo--placeholder">+</span>
    </span>
  );
}

export default function Skills() {
  return (
    <section className="sec sec--alt" id="skills">
      <div className="wrap">
        <div className="sec__head reveal">
          <div>
            <p className="eyebrow eyebrow--spark">04</p>
            <h2>Skills</h2>
          </div>
          <p className="muted sec__note">
            Tools and technologies I’ve used across my coursework and projects.
          </p>
        </div>
        <div className="grid grid--4" id="skills-grid">
          {(S.stack || []).map((group, i) => (
            <article
              className="card card--stack reveal"
              style={{ "--i": i }}
              key={group.title}
            >
              <div className="card__head">
                <DataIcon name={group.icon} />
                <h3 className="card__title">{group.title}</h3>
              </div>
              <hr className="card__line" />
              <div className="skill-list">
                {group.items.map((name, index) => (
                  <div className="chip skill-chip" key={`${name}-${index}`}>
                    <SkillLogo name={name} />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
