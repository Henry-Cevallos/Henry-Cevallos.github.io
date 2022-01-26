import React from "react";
import '../styles/ProjectsItem.css';

const ProjectItem = ( {title, project}) => {

    return(
        <div className="project-item">
            <img src={project} alt='project'/>
        </div>
    )
    
}

export default ProjectItem;