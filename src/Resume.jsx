import React from "react";

const Resume = () => {
  return (
    <section className="resume-section block" id="resume">
      <div className="resume-container block">
        <h2 className="resume-heading block">My Resume</h2>
        <p className="resume-description">
          Want to know more about my experience and skills? You can view or download my resume below.
        </p>
        <div className="resume-buttons block">
      <a
  href="Yuvaraj_J_.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="view-btn"
>
  View Resume
</a>

<a
  href="Yuvaraj_J_.pdf"
  download
  className="download-btn"
>
  Download Resume
</a>

        </div>
      </div>
    </section>
  );
};

export default Resume;