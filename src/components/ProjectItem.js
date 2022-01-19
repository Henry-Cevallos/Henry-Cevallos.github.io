import React from "react";
import '../styles/ProjectsItem.css';

const ProjectItem = ( {title}) => {

    return(
        <div className="project-item">
            {title}
        </div>
    )
    
}

export default ProjectItem;