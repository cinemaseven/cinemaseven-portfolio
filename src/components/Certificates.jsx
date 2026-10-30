import React from "react";
import SectionHead from "./SectionHead.jsx";
import { DataIcon } from "./Icons.jsx";
import S from "../data/site.js";

const EXTERNAL = { target: "_blank", rel: "noopener noreferrer" };

export default function Certificates() {
  return (
    <section className="sec sec--alt" id="certificates">
      <div className="wrap">
        <SectionHead
          num="06"
          title="Certifications"
          aside="A collection of credentials I’ve earned through coursework and independent learning, with links to verify each one."
        />
        <div className="cert-list">
          {(S.certificates || []).map((cert, i) => (
            <article
              className="cert-entry reveal"
              style={{ "--i": i }}
              key={`${cert.title}-${i}`}
            >
              <div className="cert__mark">
                <DataIcon name="award" />
              </div>
              <div className="cert__body">
                <span className="cert__issuer">{cert.issuer}</span>
                <h3>{cert.title}</h3>
                <span className="cert__date">{cert.date}</span>
              </div>
              {cert.verify && (
                <a className="cert__verify" href={cert.verify} {...EXTERNAL}>
                  Verify <span aria-hidden="true">&#8599;</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
