import React from 'react';
import ProjectCard from "./ProjectCard.jsx";
import projectData from "./projectData.json";

const Projects = () => {
  const project_height = 500 + (500 * projectData.length);
  const p_paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
   return (
    <section className="projects-section" style={{height:`${project_height}px`}}>
      <div>
        <div className="square-logo"></div>
        <h4>Projects</h4>
      </div>
      <p>{p_paragraph}</p>
      {projectData.map((items, index) => (
      <ProjectCard 
      key={index}
      projectName={items.projectName}
      projectYear={items.projectYear}
      resourcesUsed={items.resourcesUsed}
      projectDescription={items.projectDescription}
      imageURL={items.imageURL}
      imageAlt={items.imageAlt}
      />
      ))}
    </section>
  )
}

export default Projects;