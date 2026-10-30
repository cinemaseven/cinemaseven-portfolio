import React, { useEffect } from "react";

const sections = [
  ["about", "About me"],
  ["education", "Education"],
  ["experience", "Experience & leadership"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["certificates", "Certifications"],
  ["contact", "Contact"],
];

export default function Nav({ active, onToggleTheme, menuOpen, setMenuOpen }) {
  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [setMenuOpen]);

  return (
    <>
      <div className="progress" aria-hidden="true" />
      <header className="nav">
        <div className="wrap nav__inner">
          <a
            href="#top"
            className={`logo${active === "hero" ? " is-active" : ""}`}
            aria-label="Home"
          >
            <svg viewBox="0 0 40 48" width="26" height="31" aria-hidden="true">
              <path
                d="M20 12l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"
                fill="currentColor"
              />
            </svg>
            <span>ELLA</span>
          </a>
          <nav
            className={`nav__links${menuOpen ? " open" : ""}`}
            id="menu"
            aria-label="Primary"
          >
            {sections.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? "is-active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="nav__actions">
            <a
              className="btn btn--outline btn--sm"
              href="./AlejandroFrancine-CurriculumVitae.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
            <button
              className="icon-btn"
              aria-label="Toggle dark mode"
              type="button"
              onClick={onToggleTheme}
            >
              <svg
                className="i-sun"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
              <svg
                className="i-moon"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
              </svg>
            </button>
            <button
              className="icon-btn menu-btn"
              id="burger"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="menu"
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
