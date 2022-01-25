import React from "react";
import '../styles/Projects.css';
import ProjectItem from "./ProjectItem";

const Projects = () => {

    return (
        <div className='projects-start'>
            <div className='project-card'>
                <ProjectItem  className='this-one' title='Schedule.Friends'/>
                <ProjectItem title='Travelers Log'/>
                <ProjectItem title='Web Dev'/>
                <ProjectItem title='Spell Checker'/>
            </div>
        </div>
    )
}

export default Projects;