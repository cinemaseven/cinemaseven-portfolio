import React from "react";
import SectionHead from "./SectionHead.jsx";
import { Chips } from "./Icons.jsx";
import S from "../data/site.js";

const EXTERNAL = { target: "_blank", rel: "noopener noreferrer" };

export default function Projects({
  projects,
  loaded,
  error,
  page,
  pages,
  perPage,
  pageProjects,
  motion,
  onPageChange,
}) {
  return (
    <section className="sec" id="projects">
      <div className="wrap">
        <SectionHead num="05" title="Projects">
          <a
            className="link-caps"
            href={
              S.githubAll || "https://github.com/cinemaseven?tab=repositories"
            }
            {...EXTERNAL}
          >
            View all on GitHub →
          </a>
        </SectionHead>
        {error && !projects.length ? (
          <p className="muted">
            Projects could not be loaded right now. You can still visit{" "}
            <a
              href={`${S.github || "https://github.com/cinemaseven"}?tab=repositories`}
              {...EXTERNAL}
            >
              GitHub repositories
            </a>
            .
          </p>
        ) : !loaded ? (
          <p className="muted">Loading projects from GitHub…</p>
        ) : !projects.length ? (
          <p className="muted">No public projects are currently available.</p>
        ) : (
          <>
            <div
              className={`grid grid--3${motion ? " project-grid--changing" : ""}`}
              data-direction={motion}
              aria-live="polite"
              tabIndex={-1}
            >
              {pageProjects.map((repo, i) => {
                const key = (repo.name || "").toLowerCase();
                const custom = (S.projectDetails || {})[key] || {};
                const image = repo.projectNoPreview
                  ? ""
                  : repo.projectImage ||
                    (S.projectPreviews || {})[key] ||
                    custom.image ||
                    "";
                const description =
                  custom.desc ||
                  repo.description ||
                  "Explore the source code and implementation details of this project.";
                const demo = repo.homepage || custom.demo || "";
                const tags = Object.prototype.hasOwnProperty.call(
                  S.projectTags || {},
                  key,
                )
                  ? S.projectTags[key]
                  : typeof repo.id === "string" && repo.id.startsWith("manual-")
                    ? repo.projectTags
                    : repo.language
                      ? [repo.language]
                      : [];
                const roles = repo.projectRoles?.length
                  ? repo.projectRoles
                  : custom.roles || [];
                const isYellowCard = (page * perPage + i) % 2 === 1;
                return (
                  <article
                    className={`card card--proj${isYellowCard ? " card--proj-light" : ""} reveal`}
                    style={{ "--i": i }}
                    key={repo.id || repo.name}
                  >
                    <div
                      className={`proj__art${!image ? " proj__art--empty" : ""}`}
                    >
                      {image ? (
                        <img
                          src={image}
                          alt={`Preview of ${repo.projectTitle || repo.name}`}
                          loading="lazy"
                        />
                      ) : (
                        <div className="proj__no-preview">
                          <span>
                            {repo.projectNoPreview
                              ? "CERTIFICATION PROJECT"
                              : "PROJECT PREVIEW"}
                          </span>
                          <small>
                            {repo.projectNoPreview
                              ? "Grouped coursework · no preview"
                              : "Add a screenshot to projectPreviews in src/data/site.js"}
                          </small>
                        </div>
                      )}
                      <span className="proj__count" aria-hidden="true">
                        {String(page * perPage + i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="proj__content">
                      <h3>{repo.projectTitle || custom.title || repo.name}</h3>
                      {roles.length > 0 && (
                        <p className="proj__roles">{roles.join(" · ")}</p>
                      )}
                      {roles.length > 0 && <hr className="proj__separator" />}
                      <p className="proj__description">{description}</p>
                      <div className="proj__details">
                        <Chips items={tags} />
                        <div className="proj__links">
                          {demo && (
                            <a className="link-caps" href={demo} {...EXTERNAL}>
                              Live
                            </a>
                          )}
                          {repo.html_url && (
                            <a
                              className="link-caps"
                              href={repo.html_url}
                              {...EXTERNAL}
                            >
                              View on GitHub
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
            <div
              className="project-controls"
              hidden={projects.length <= perPage}
              aria-label="Project pages"
            >
              <button
                className="project-arrow"
                type="button"
                aria-label="Show previous projects"
                disabled={page === 0}
                onClick={() => onPageChange(-1)}
              >
                <span aria-hidden="true">←</span>
              </button>
              <span className="project-page" aria-live="polite">
                {page + 1} / {pages}
              </span>
              <button
                className="project-arrow"
                type="button"
                aria-label="Show next projects"
                disabled={page >= pages - 1}
                onClick={() => onPageChange(1)}
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
