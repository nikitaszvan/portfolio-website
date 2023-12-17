import React from 'react';
import ProjectCard from "./ProjectCard.jsx";

const Projects = () => {
  const p_paragraph = "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.";
  return (
    <section className="projects-section">
      <div>
        <div className="square-logo"></div>
        <h4>Projects</h4>
      </div>
      <p>{p_paragraph}</p>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </section>
  )
}

export default Projects;