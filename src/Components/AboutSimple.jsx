export default function AboutSimple() {
  return (
    <section id="about">
      <div className="container about-inner">
        <div className="about-photo-wrap">
          <img src="/public/d6b29005095ceffe9acb324ba359b1591a30345c39de668a09e6ad3be87df3ab.png" alt="Mobolaji working" />
        </div>
        <div className="about-text">
          <h2 className="section-title" style={{ textAlign: 'left' }}>About Me</h2>
          <p>
            I am a MERN Stack Web Developer focusing on building
            production-ready applications. I enjoy designing APIs, creating
            interactive user interfaces, and optimizing performance.
          </p>
          <p>
            I follow clean architecture principles and modern development
            patterns, and I actively explore new tools in the MERN ecosystem
            to keep improving my workflow.
          </p>
        </div>
      </div>
    </section>
  );
}