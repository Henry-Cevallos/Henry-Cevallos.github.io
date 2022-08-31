import React from "react";
import "../styles/Projects.css";
import ProjectItem from "./ProjectItem";
import { Grid } from "@mui/material";
const Projects = ({ projects }) => {
  return (
    <div className="projects-start">
      <div className="project-card">
        <Grid container spacing={2}>
          <Grid item md={3}>
            <ProjectItem
              title="Schedule.Friends"
              project={projects[0]}
              url="https://github.com/Alyssa-Ma/Schedule.friends"
            />
          </Grid>
          <Grid item md={3}>
            <ProjectItem
              title="Travelers Log"
              project={projects[1]}
              url="https://github.com/ElianFelix/travelers-log"
            />
          </Grid>
          <Grid item md={3}>
            <ProjectItem
              title="Web Dev"
              project={projects[2]}
              url="https://github.com/Alyssa-Ma/Web-Dev-Final-Project"
            />
          </Grid>
          <Grid item md={3}>
            <ProjectItem
              title="Spell Checker"
              project={projects[3]}
              url="https://github.com/Henry-Cevallos/Spell-Checker"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Projects;
