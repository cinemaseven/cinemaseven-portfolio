import React from "react";

export default function SectionHead({ num, title, aside, children }) {
  return (
    <div className="sec__head reveal">
      <div>
        <p className="eyebrow eyebrow--spark">{num}</p>
        <h2>{title}</h2>
      </div>
      {aside && <p className="muted sec__note">{aside}</p>}
      {children}
    </div>
  );
}
