import React from "react";
import AP from '../images/middle/APLogo.jpg';
import Reuters from '../images/middle/Reuters.png';
import AP from '../images/middle/APLogo.jpg';
import AP from '../images/middle/APLogo.jpg';

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
      <img src={AP} class="card-img-top" alt="Project 1"></img>
      <div class="card-body">
        <h5 class="card-title">Associated Press</h5>
        <p class="card-text">Associated Press Hot Topics</p>
      </div>
      <div class="card-body">
        <p>
        <a href="https://github.com/MattReynolds53/WishTravelP2" class="card-link">Russia and Ukraine War</a>
        </p>
        <p>
        <a href="https://desolate-bastion-60870.herokuapp.com/login" class="card-link">Deployed Application</a>
        </p>
      </div>
    </div>
  
    <div class="card" style={styles.cardWidth}>
      <img src={Reuters} class="card-img-top" alt="Project 1"></img>
      <div class="card-body">
        <h5 class="card-title">Reuters</h5>
        <p class="card-text"></p>
      </div>
      <div class="card-body">
        <p>
        <a href="https://www.reuters.com/" class="card-link">Reuters Homepage</a>
        </p>
        <p>
        <a href="https://www.reuters.com/world/" class="card-link">World News</a>
        </p>
        <p>
        <a href="https://www.reuters.com/business/" class="card-link">Business News</a>
        </p>
        <p>
        <a href="https://www.reuters.com/technology/" class="card-link">Technology News</a>
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