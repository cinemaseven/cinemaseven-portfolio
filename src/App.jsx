import React, { useEffect, useMemo, useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Certificates from "./components/Certificates.jsx";
import Contact, { Footer } from "./components/Contact.jsx";
import S from "./data/site.js";

const GITHUB_USER =
  S.githubUser ||
  (S.github ? S.github.replace(/\/+$/, "").split("/").pop() : "cinemaseven");
const MANUAL_PROJECTS = (S.additionalProjects || []).map((project, index) => {
  const repository = project.repository || "";
  const repoName =
    repository.split("/").filter(Boolean).pop() ||
    project.title ||
    `contributed-project-${index + 1}`;
  const source =
    project.source || (repository ? `https://github.com/${repository}` : "");
  return {
    id: `manual-${index}-${repoName}`,
    name: repoName,
    description: project.description || "",
    html_url: source,
    homepage: project.demo || "",
    projectTitle: project.title || repoName,
    projectTags: project.tags || [],
    projectRoles: project.roles || [],
    projectImage: project.image || "",
  };
});

export default function App() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute("data-theme") || "light",
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [projects, setProjects] = useState([]);
  const [projectsLoaded, setProjectsLoaded] = useState(false);
  const [projectError, setProjectError] = useState(false);
  const [projectPage, setProjectPage] = useState(0);
  const [projectMotion, setProjectMotion] = useState("");
  const [projectsPerPage, setProjectsPerPage] = useState(() =>
    window.matchMedia("(max-width: 600px)").matches ? 1 : 3,
  );

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 600px)");
    const updateProjectPageSize = () => {
      setProjectsPerPage(mobileQuery.matches ? 1 : 3);
      setProjectPage(0);
      setProjectMotion("");
    };
    mobileQuery.addEventListener("change", updateProjectPageSize);
    return () =>
      mobileQuery.removeEventListener("change", updateProjectPageSize);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {}
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === "dark" ? "#1A2937" : "#DCEEFF";
  }, [theme]);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const revealItems = document.querySelectorAll(".reveal:not(.in)");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("in"));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [projectsLoaded, projectPage, projectsPerPage]);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const nav = document.querySelector(".nav");
      const bar = document.querySelector(".progress");
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (bar)
        bar.style.setProperty(
          "--p",
          scrollable > 0 ? (window.scrollY / scrollable).toFixed(4) : 0,
        );
      if (nav) nav.classList.toggle("is-stuck", window.scrollY > 24);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");
    if (!("IntersectionObserver" in window)) return undefined;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let alive = true;
    fetch(
      `https://api.github.com/users/${encodeURIComponent(GITHUB_USER)}/repos?per_page=100&sort=updated`,
    )
      .then((response) => {
        if (!response.ok)
          throw new Error(`GitHub API returned ${response.status}`);
        return response.json();
      })
      .then((repos) => {
        if (!alive) return;
        const order = (S.projectOrder || []).map((name) =>
          String(name).toLowerCase(),
        );
        const excludedProjects = new Set(
          (S.projectExclusions || []).map((name) => String(name).toLowerCase()),
        );
        const owned = repos
          .filter((repo) => !repo.fork && !repo.archived && !repo.disabled)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        const manualProjects = MANUAL_PROJECTS.map((project) => {
          if (project.html_url) return project;
          const matchingRepo = owned.find(
            (repo) => repo.name?.toLowerCase() === project.name.toLowerCase(),
          );
          return matchingRepo
            ? { ...project, html_url: matchingRepo.html_url }
            : project;
        });
        const manualUrls = new Set(
          manualProjects
            .map((project) =>
              project.html_url?.replace(/\/$/, "").toLowerCase(),
            )
            .filter(Boolean),
        );
        const manualNames = new Set(
          manualProjects.map((project) => project.name.toLowerCase()),
        );
        const visible = [
          ...manualProjects,
          ...owned.filter((repo) => {
            const name = (repo.name || "").toLowerCase();
            const isFreeCodeCamp = /free.?code.?camp|(^|[-_])fcc([_-]|$)/i.test(
              name,
            );
            return (
              !isFreeCodeCamp &&
              !excludedProjects.has(name) &&
              !manualNames.has(name) &&
              !manualUrls.has(
                (repo.html_url || "").replace(/\/$/, "").toLowerCase(),
              )
            );
          }),
        ].sort((a, b) => {
          const ai = order.indexOf((a.name || "").toLowerCase());
          const bi = order.indexOf((b.name || "").toLowerCase());
          if (ai !== -1 || bi !== -1) {
            if (ai === -1) return 1;
            if (bi === -1) return -1;
            return ai - bi;
          }
          return 0;
        });
        setProjects(visible);
        setProjectsLoaded(true);
      })
      .catch(() => {
        if (alive) {
          setProjects(MANUAL_PROJECTS);
          setProjectError(true);
          setProjectsLoaded(true);
        }
      });
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    if (!projectMotion) return undefined;
    const timeout = window.setTimeout(() => setProjectMotion(""), 760);
    return () => window.clearTimeout(timeout);
  }, [projectMotion]);

  const pages = Math.ceil(projects.length / projectsPerPage);
  const pageProjects = useMemo(
    () =>
      projects.slice(
        projectPage * projectsPerPage,
        (projectPage + 1) * projectsPerPage,
      ),
    [projects, projectPage, projectsPerPage],
  );
  useEffect(() => {
    setProjectPage((current) => Math.min(current, Math.max(0, pages - 1)));
  }, [pages]);

  const changeProjectPage = (direction) => {
    setProjectMotion(direction > 0 ? "next" : "previous");
    setProjectPage((current) =>
      Math.max(0, Math.min(current + direction, pages - 1)),
    );
  };

  return (
    <>
      <Nav
        active={active}
        onToggleTheme={() =>
          setTheme((current) => (current === "dark" ? "light" : "dark"))
        }
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <main id="top">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects
          projects={projects}
          loaded={projectsLoaded}
          error={projectError}
          page={projectPage}
          pages={pages}
          perPage={projectsPerPage}
          pageProjects={pageProjects}
          motion={projectMotion}
          onPageChange={changeProjectPage}
        />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
