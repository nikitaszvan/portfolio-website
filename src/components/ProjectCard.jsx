import React from 'react';

const ProjectCard = (props) => {
  return (
    <div className="project-card">
        <div className="vertical-line"></div>
        <div>
            <h6>{props.projectName}</h6>
            <p>{props.projectYear}</p>
            <p>{props.resourcesUsed}</p>
            <p>{props.projectDescription}</p>
        </div>
        <img src={props.imageURL} alt={props.imageAlt}/>
    </div>
  )
}

export default ProjectCard;