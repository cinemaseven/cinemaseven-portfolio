import React, { useEffect, useRef } from "react";

export default function Hero() {
  const archRef = useRef(null);
  useEffect(() => {
    const arch = archRef.current;
    if (
      !arch ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(hover: hover)").matches
    )
      return undefined;
    const onMove = (event) => {
      const rect = arch.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      arch.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
    };
    const onLeave = () => {
      arch.style.transform = "";
    };
    arch.addEventListener("pointermove", onMove);
    arch.addEventListener("pointerleave", onLeave);
    return () => {
      arch.removeEventListener("pointermove", onMove);
      arch.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <>
      <section className="hero" id="hero">
        <div className="blob blob--a" aria-hidden="true" />
        <div className="blob blob--b" aria-hidden="true" />
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <p className="script anim" style={{ "--i": 0 }}>
              Hello, I'm
            </p>
            <h1 className="hero__name anim" style={{ "--i": 1 }}>
              Francine
              <br />
              Angela
            </h1>
            <p className="eyebrow anim" style={{ "--i": 2 }}>
              Computer Science Student
            </p>
            <p className="lead anim" style={{ "--i": 3 }}>
              I’m a fourth-year Computer Science student interested in backend
              development, UI/UX design, and creating useful digital
              experiences. I’m always learning and open to internship
              opportunities and collaborative projects.
            </p>
            <div className="hero__cta anim" style={{ "--i": 4 }}>
              <a className="btn btn--primary" href="#projects">
                View my work <span aria-hidden="true">→</span>
              </a>
              <a className="btn btn--highlight" href="#contact">
                Contact me
              </a>
            </div>
          </div>
          <div className="hero__photo anim" style={{ "--i": 3 }}>
            <span
              className="hero__celestial hero__celestial--sun"
              aria-hidden="true"
            >
              ☀
            </span>
            <span
              className="hero__celestial hero__celestial--moon"
              aria-hidden="true"
            >
              ☾
            </span>
            <span
              className="hero__celestial hero__celestial--star"
              aria-hidden="true"
            >
              ✦
            </span>
            <span
              className="hero__twinkle hero__twinkle--one"
              aria-hidden="true"
            >
              ✧
            </span>
            <span
              className="hero__twinkle hero__twinkle--two"
              aria-hidden="true"
            >
              ✦
            </span>
            <span
              className="hero__twinkle hero__twinkle--three"
              aria-hidden="true"
            >
              ✧
            </span>
            <span
              className="hero__twinkle hero__twinkle--four"
              aria-hidden="true"
            >
              ✦
            </span>
            <div className="arch" ref={archRef}>
              <img
                className="hero__portrait--light"
                src="./hero-image/introIMG-light.jpg"
                alt="Portrait of Francine Angela Alejandro"
                width="320"
                height="400"
                onError={(event) => event.currentTarget.remove()}
              />
              <img
                className="hero__portrait--dark"
                src="./hero-image/introIMG-dark.jpg"
                alt="Portrait of Francine Angela Alejandro"
                width="320"
                height="400"
                onError={(event) => event.currentTarget.remove()}
              />
              <div className="arch__ph">
                <svg
                  viewBox="0 0 24 24"
                  width="38"
                  height="38"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c1-4.5 4.5-6.5 8-6.5s7 2 8 6.5" />
                </svg>
                <small>
                  Your photo
                  <br />
                  320 × 400
                </small>
              </div>
            </div>
            <div className="badge">
              <svg viewBox="0 0 24 24" width="14" height="14">
                <path
                  d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z"
                  fill="currentColor"
                />
              </svg>
              Open to
              <br />
              internships
            </div>
          </div>
        </div>
      </section>
      <div className="divider" role="presentation" />
    </>
  );
}
