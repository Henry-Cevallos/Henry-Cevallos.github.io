import React from "react";
import { Avatar, Grid } from "@mui/material";
import "./styles/App.css";
import LinkItem from "./components/LinkItem";
import Carousel from "./components/Carousel";
import Projects from "./components/Projects";
import chessBg from "./media/chess.png";
import homeassistantBg from "./media/homeassistant.png";
import programmingBg from "./media/programming.jpeg";
import twitchBg from "./media/twitch.png";
import schedulefriendsBg from "./media/ScheduleFriends.png";
import travelerslog from "./media/TravelersLog.svg";
import campusManager from "./media/campus.png";
import spellChecker from "./media/spellcheck.png";
import resume from "./media/Henry_Cevallos_Resume_safe.pdf";
import picture from "./media/HenryPicture.jpeg";

function App() {
  const images = [programmingBg, homeassistantBg, chessBg, twitchBg];
  const projects = [
    schedulefriendsBg,
    travelerslog,
    campusManager,
    spellChecker,
  ];
  const titles = [
    "Software Development",
    "IOT/Smart Home Tech",
    "Chess",
    "Twitch Streams",
  ];

  return (
    <div className="App">
      <div className="App-body shadow">
        <br />
        <Avatar
          className="Avatar shadow"
          alt="Henry Cevallos Picture"
          sx={{ width: 150, height: 150, fontSize: 50 }}
          src={picture}
        >
          HC
        </Avatar>

        <br />
        <div className="link-boxes">
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          
            <Grid item xs={12} md={4}>
              <LinkItem
                iconName="github"
                description="Github"
                url="https://github.com/Henry-Cevallos"
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <LinkItem
                iconName="linkedin"
                description="LinkedIn"
                url="https://www.linkedin.com/in/henry-cevallos/"
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <LinkItem
                iconName="email"
                description="Email"
                url="mailto:henry.cevallos27@gmail.com"
              />
            </Grid>
         

          
            <Grid item xs={12} md={4}>
              <LinkItem iconName="location" description="New York, NY" />
            </Grid>

            <Grid item xs={12} md={4}>
              <LinkItem iconName="resume" description="Resume" url={resume} />
            </Grid>
          
        </Grid>
        </div>
        <div className="Section-start About-section Section-bg shadow">
          <h1 className="Section-title">About Me</h1>
          <div className="About-text">
            Hi! I'm Henry, an aspiring software engineer looking to provide
            smart solutions to everyday problems. I recenty graduated from
            Hunter College Magna Cum Laude and received departmental honors for
            Computer Science. I majored in Computer Science and minored in
            Mathematics. I am looking to apply all my knowledge in a meaningful
            way within the tech industry.
          </div>
        </div>

        <div className="Hobbies-section Section-bg shadow">
          <h1 className="Section-title">Hobbies</h1>
          <Carousel images_array={images} headings={titles} />
        </div>

        <div className="Projects-section Section-bg shadow">
          <h1 className="Section-title">Projects</h1>
          <Projects projects={projects} />
          <div className="center underline">
            <small>
              Find more projects on{" "}
              <a href="https://github.com/Henry-Cevallos" className="link">
                <small>my GitHub </small>
              </a>
            </small>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default App;
