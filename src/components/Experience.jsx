import React from "react";
import SectionHead from "./SectionHead.jsx";
import { DataIcon } from "./Icons.jsx";
import S from "../data/site.js";

export default function Experience() {
  return (
    <section className="sec" id="experience">
      <div className="wrap">
        <SectionHead
          num="03"
          title="Experience &amp; leadership"
          aside="Roles where I have supported event planning, member communication, and creative work."
        />
        <div className="experience-timeline">
          {(S.experience || []).map((item, i) => (
            <article
              className="experience-entry reveal"
              style={{ "--i": i }}
              key={`${item.role}-${item.org}-${i}`}
            >
              <div className="experience-entry__rail">
                <span className="experience-entry__initials">
                  {item.initials}
                </span>
                <span className="experience-entry__dates">{item.dates}</span>
              </div>
              <div className="experience-entry__content card">
                <div className="experience-entry__head">
                  <div>
                    <p className="experience-entry__org">{item.org}</p>
                    <h3 className="card__title">{item.role}</h3>
                  </div>
                  <span className="experience-entry__mark">
                    <DataIcon name="star" size={17} />
                  </span>
                </div>
                <hr className="card__line" />
                <div className="experience-entry__details">
                  <p>{item.l1}</p>
                  <p>{item.l2}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
