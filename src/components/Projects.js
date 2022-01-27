import React from "react";
import '../styles/Projects.css';
import ProjectItem from "./ProjectItem";

const Projects = ({projects}) => {

    return (
        <div className='projects-start'>
            <div className='project-card'>
                <ProjectItem title='Schedule.Friends' project={projects[0]}/>
                <ProjectItem title='Travelers Log' project={projects[1]}/>
                <ProjectItem title='Web Dev'/>
                <ProjectItem title='Spell Checker'/>
            </div>
        </div>
    )
}

export default Projects;