import React from "react";
import { Chips, DataIcon } from "./Icons.jsx";
import S from "../data/site.js";

export default function Education() {
  return (
    <section className="sec sec--alt" id="education">
      <div className="wrap">
        <div className="sec__head reveal">
          <div>
            <p className="eyebrow eyebrow--spark">02</p>
            <h2>Education</h2>
          </div>
        </div>
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
                {item.courses && (
                  <>
                    <p className="eyebrow edu__label">Relevant coursework</p>
                    <Chips items={[...item.courses, "+ Add yours"]} />
                  </>
                )}
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
