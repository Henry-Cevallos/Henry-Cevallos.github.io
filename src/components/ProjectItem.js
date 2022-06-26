import React from "react";
import '../styles/ProjectsItem.css';

const ProjectItem = ( {title, project, url}) => {

    const openNewTab = link => {
        window.open(link, '_blank', 'noopener,noreferrer');
    };

    return(
        <div className="project-item" onClick={() => openNewTab(url)}>
            <img src={project} alt='project'/>
        </div>
    )
    
}

export default ProjectItem;