import React from "react";
import SectionHead from "./SectionHead.jsx";
import { DataIcon } from "./Icons.jsx";
import S from "../data/site.js";

export default function Education() {
  return (
    <section className="sec sec--alt" id="education">
      <div className="wrap">
        <SectionHead
          num="02"
          title="Education"
          aside="My academic path, with honors and scholarships earned along the way."
        />
        <div className="stack-list">
          {(S.education || []).map((item, i) => (
            <article
              className={`edu reveal${item.hs ? " edu--hs" : ""}`}
              style={{ "--i": i }}
              key={`${item.title}-${i}`}
            >
              <DataIcon name={item.icon} />
              <div>
                <h3>{item.title}</h3>
                <p className="muted" style={{ margin: ".2rem 0 0" }}>
                  {item.school}
                </p>
                {item.note && (
                  <ul className="edu__note">
                    {(Array.isArray(item.note) ? item.note : [item.note]).map(
                      (note, n) => (
                        <li key={n}>{note}</li>
                      ),
                    )}
                  </ul>
                )}
              </div>
              <span className="edu__date">{item.dates}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
