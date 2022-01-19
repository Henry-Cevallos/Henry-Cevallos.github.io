import React from "react";
import '../styles/Projects.css';
import ProjectItem from "./ProjectItem";

const Projects = () => {

    return (
        <div className='Projects-start'>
            <div className='project-card'>
                <ProjectItem />
            </div>
        </div>
    )
}

export default Projects;