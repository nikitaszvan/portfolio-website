import React from 'react';

const ProjectCard = (props) => {
  return (
    <div className="project-card">
        <div className="vertical-line"></div>
        <div>
            <h6>{props.projectName}</h6>
            <p>{props.roleTitle}</p>
            <p>{props.jobDescrip}</p>
        </div>
        <img src={props.src} alt={props.alt}/>
    </div>
  )
}

export default ProjectCard;