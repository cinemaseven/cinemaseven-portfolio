import React from "react";

export default function About() {
  return (
    <section className="sec" id="about">
      <div className="wrap about">
        <div className="about__heading reveal">
          <p className="eyebrow eyebrow--spark">01</p>
          <h2>About me</h2>
        </div>
        <div className="about__text reveal" style={{ "--i": 1 }}>
          <p>
            Hi! I'm{" "}
            <span className="about__name">Francine Angela Alejandro</span>, but
            most people call me <span className="about__ella">Ella</span>.
          </p>
          <p>
            I'm a fourth-year Computer Science student at Holy Angel University,
            primarily interested in backend development and data analytics,
            while growing my experience in frontend development and UI/UX
            design. I enjoy building applications that combine functionality
            with thoughtful design, turning ideas into practical solutions that
            make everyday tasks easier. I am driven by the opportunity to learn
            through hands-on projects, explore new technologies, and
            continuously improve my skills as a developer.
          </p>
          <p className="muted">
            Outside the classroom, I enjoy exploring cafes, taking photos of
            the places and moments I enjoy, and contributing to campus
            organizations through event
            planning, member coordination, and creative work. I value teamwork,
            open communication, and learning from different perspectives. As I
            move forward, I hope to gain real-world experience, strengthen my
            technical skills, and create meaningful projects that reflect my
            creativity and problem-solving abilities.
          </p>
        </div>
      </div>
    </section>
  );
}
