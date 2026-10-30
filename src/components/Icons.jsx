import React from "react";

const iconPaths = {
  code: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4" />,
  grid: (
    <>
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="6" height="6" rx="1" />
    </>
  ),
  tool: <path d="M14 6a4 4 0 0 0 5 5l-9 9a2 2 0 0 1-3-3l9-9a4 4 0 0 0-2-2z" />,
  star: (
    <path
      d="M12 3l2.2 6.8L21 12l-6.8 2.2L12 21l-2.2-6.8L3 12l6.8-2.2z"
      fill="currentColor"
    />
  ),
  cap: (
    <>
      <path d="M3 9l9-5 9 5-9 5z" />
      <path d="M7 11.5V16c0 1.5 2.2 3 5 3s5-1.5 5-3v-4.5" />
    </>
  ),
  book: <rect x="6" y="4" width="12" height="16" rx="2" />,
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5L7.5 21 12 18.5l4.5 2.5-1.5-7.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  github: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4" />,
  link: (
    <>
      <path d="M10 14a4 4 0 0 0 5.5 0l3-3A4 4 0 0 0 13 5.5L12 7" />
      <path d="M14 10a4 4 0 0 0-5.5 0l-3 3A4 4 0 0 0 11 18.5l1-1" />
    </>
  ),
};

export function DataIcon({ name, size = 18 }) {
  return (
    <span className="ico">
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {iconPaths[name] || null}
      </svg>
    </span>
  );
}

export function Chips({ items = [] }) {
  return (
    <div className="chips">
      {items.map((item, i) => (
        <span className="chip" key={`${item}-${i}`}>
          {item}
        </span>
      ))}
    </div>
  );
}
