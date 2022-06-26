import React from "react";
import '../styles/Projects.css';
import ProjectItem from "./ProjectItem";

const Projects = ({projects}) => {

    

    return (
        <div className='projects-start'>
            <div className='project-card'>
                <ProjectItem title='Schedule.Friends' project={projects[0]} url='https://github.com/Alyssa-Ma/Schedule.friends'/>
                <ProjectItem title='Travelers Log' project={projects[1]} url='https://github.com/ElianFelix/travelers-log'/>
                <ProjectItem title='Web Dev' project={projects[2]} url='https://github.com/Alyssa-Ma/Web-Dev-Final-Project'/>
                <ProjectItem title='Spell Checker' project={projects[3]} url='https://github.com/Henry-Cevallos/Spell-Checker'/>
            </div>
        </div>
    )
}

export default Projects;