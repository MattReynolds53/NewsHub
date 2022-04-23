import React from "react";
import project1 from '../images/MyTravelAdvisor.png';
import project2 from '../images/albumSearchPageResults.png';
import project3 from '../images/TechBlog2.png';
import project4 from '../images/WeatherDashboardScreenshot.png';
import project5 from '../images/NoteTaker.png';
import project6 from '../images/CodingTeamGenerator.png';
// import { projects } from "../data";

const styles = {
  cardWidth: {
    width: "30rem",
    // borderRadius: "5%"
    marginTop: "10px",
    marginBottom: "10px"
  },
  cardDisplay: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingTop: "5rem",
  },
  // links: {
  //   display: "flex",
  //   justifyContent: "center"
  // }
  
};

export default function Projects() {
  return (
  <> 
  <div style={styles.cardDisplay}>
    <div class="card" style={styles.cardWidth}>
      <img src={project1} class="card-img-top" alt="Project 1"></img>
      <div class="card-body">
        <h5 class="card-title">My Travel Advisor</h5>
        <p class="card-text">Travel application allowing users to search for cities and plan future vacations. Users can build their own profile with a travel journal outlining dream vacations and savings goals for each.</p>
      </div>
      <div class="card-body">
        <p>
        <a href="https://github.com/MattReynolds53/WishTravelP2" class="card-link">GitHub Repository</a>
        </p>
        <p>
        <a href="https://desolate-bastion-60870.herokuapp.com/login" class="card-link">Deployed Application</a>
        </p>
      </div>
    </div>
  
    <div class="card" style={styles.cardWidth}>
      <img src={project2} class="card-img-top" alt="Project 1"></img>
      <div class="card-body">
        <h5 class="card-title">Music Search Engine</h5>
        <p class="card-text">Music search engine with which users can search for their favorite artists, songs, and albums. Users can listen to songs, view lyrics, and view their favorite artists' upcoming concerts and events.</p>
      </div>
      <div class="card-body">
        <p>
        <a href="https://github.com/MattReynolds53/ProjectforHackers" class="card-link">GitHub Repository</a>
        </p>
        <p>
        <a href="https://colinmchale.github.io/ProjectforHackers/" class="card-link">Deployed Application</a>
        </p>
      </div>
    </div>
    
    <div class="card" style={styles.cardWidth}>
      <img src={project3} class="card-img-top" alt="Project 1"></img>
      <div class="card-body">
        <h5 class="card-title">Tech Blog</h5>
        <p class="card-text">A tech blog where users can share their thoughts, build out personalized profiles, and comment on other blog posts.</p>
      </div>
      <div class="card-body">
        <p>
        <a href="https://github.com/MattReynolds53/My-Tech-Blog" class="card-link">GitHub Repository</a>
        </p>
        <p>
        <a href="https://boiling-stream-98053.herokuapp.com/" class="card-link">Deployed Application</a>
        </p>
      </div>
    </div>
  </div>

  <div style={styles.cardDisplay}>
    <div class="card" style={styles.cardWidth}>
      <img src={project4} class="card-img-top" alt="Project 1"></img>
      <div class="card-body">
        <h5 class="card-title">Weather Dashboard</h5>
        <p class="card-text">A weather dashboard that provides the latest weather information including temperature, humidity, UV index, and the5-days forecasts for any city.</p>
      </div>
      <div class="card-body">
        <p>
        <a href="https://github.com/MattReynolds53/Forecast-Dashboard" class="card-link">GitHub Repository</a>
        </p>
        <p>
        <a href="https://mattreynolds53.github.io/Forecast-Dashboard/" class="card-link">Deployed Application</a>
        </p>
      </div>
    </div>

    <div class="card" style={styles.cardWidth}>
      <img src={project5} class="card-img-top" alt="Project 1"></img>
      <div class="card-body">
        <h5 class="card-title">Note Taker</h5>
        <p class="card-text">Easy-to-use note taker for everyday tasks to make everyday life a little bit easier.</p>
      </div>
      <div class="card-body">
        <p>
        <a href="https://github.com/MattReynolds53/Everyday-Note-Taker" class="card-link">GitHub Repository</a>
        </p>
        <p>
        <a href="https://guarded-earth-77285.herokuapp.com/" class="card-link">Deployed Application</a>
        </p>
      </div>
    </div>

    <div class="card" style={styles.cardWidth}>
      <img src={project6} class="card-img-top" alt="Project 1"></img>
      <div class="card-body">
        <h5 class="card-title">Coding Team Generator</h5>
        <p class="card-text">Utilize the command line to efficiently display your coding team with their most relevant information.</p>
      </div>
      <div class="card-body">
        <p>
        <a href="https://github.com/MattReynolds53/Coding-Team-Generator" class="card-link">GitHub Repository</a>
        </p>
        <p>
        <a href="https://drive.google.com/file/d/1u5wmaeXG3Il7auqGa40GPCfnBTDTqquw/view" class="card-link">View Code Deployment Demo</a>
        </p>
      </div>
    </div>
  </div>
  </>   
    
    
  );
}