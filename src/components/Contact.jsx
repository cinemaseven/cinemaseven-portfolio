import React from "react";
import { DataIcon } from "./Icons.jsx";
import S from "../data/site.js";
const EXTERNAL = { target: "_blank", rel: "noopener noreferrer" };

export default function Contact() {
  const links = [
    {
      icon: "mail",
      label: "Email",
      text: S.email,
      href: S.email ? `mailto:${S.email}` : "",
    },
    {
      icon: "github",
      label: "GitHub",
      text: (S.github || "").replace(/^https?:\/\//, ""),
      href: S.github,
      external: true,
    },
    {
      icon: "link",
      label: "LinkedIn",
      text: (S.linkedin || "").replace(/^https?:\/\//, ""),
      href: S.linkedin,
      external: true,
    },
  ].filter((item) => item.text && item.href);

  return (
    <section className="contact" id="contact">
      <div className="wrap contact__grid">
        <div className="reveal">
          <p className="eyebrow eyebrow--spark">07</p>
          <h2>
            Let's build
            <br />
            something together.
          </h2>
          <p className="lead">
            I’m open to internship opportunities, collaborative projects, and
            new ways to learn and grow. Let’s get in touch—I’d love to hear from
            you!
          </p>
          <a
            className="btn btn--highlight"
            href={`mailto:${S.email || "you@email.com"}`}
          >
            Say hello <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="contact__links">
          {links.map((item, i) => (
            <a
              className="clink reveal"
              style={{ "--i": i }}
              key={item.label}
              href={item.href}
              {...(item.external ? EXTERNAL : {})}
            >
              <DataIcon name={item.icon} />
              <div>
                <small>{item.label}</small>
                <span>{item.text}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span>
          © <span>{new Date().getFullYear()}</span> Francine Angela Alejandro.
          All rights reserved.
        </span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
