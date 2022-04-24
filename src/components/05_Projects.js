import weatherapp from "../assets/weatherapp.jpg";
import memoryapp from "../assets/MemoryGame.jpg";
import menuapp from "../assets/menuapp.jpg";

import { useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      name: "Weather App",
      image: weatherapp,
      description:
        "The app can send request to an Weather API to get the weather information of a city, only if the city name is correct. I was using this project to learn and use Bootstrap with ReactJS together to build a web app.",
      reflex:
        "Working with a third party API required me to read and understand how the API return data back in JSON format. I also have to deal with HTTP Resquest and Response when making calls to API.",
      tech1: "ReactJS",
      tech2: "Bootstrap",
      tech3: "Netlify",
      code: "https://github.com/dunghongweber/React_Weather-App",
      live: "https://dh-weather-app.netlify.app",
    },
    {
      name: "Memory Game",
      image: memoryapp,
      description:
        "The app lets users choose 2 cards per turn to find a matching pair. Users can complete the game by finding out all the matching pairs",
      reflex:
        "This project helps me practice and strengthen my skill with useState and useEffect. I also learn a lot of way to use logic, if/else, comparison in react/javascript. It introduced me to the basic of CSS animation.",
      tech1: "ReactJS",
      tech2: "CSS",
      tech3: "Netlify",

      code: "https://github.com/dunghongweber/React_Memory-Card",
      live: "https://dh-memory-cards.netlify.app",
    },
    {
      name: "Simple Menu App",
      image: menuapp,
      description:
        "The app lets users order pizza, sandwich, or/and chicken wings. It keeps track of user in a simple shopping cart. A basic form validation for users to checkout",
      reflex:
        "This project helps me learn about Framer Motion to have better and smoother animation in React app. I also got the opportunity to use and better understand of array methods such as Map, Find, Some, and Includes.",
      tech1: "ReactJS",
      tech2: "Motion Framer",
      tech3: "Materialize CSS",

      code: "https://github.com/dunghongweber/React_Menu-App",
      live: "https://dh-simple-menu.netlify.app/",
    },
  ]);

  return (
    <div className="container" id="projects">
      <h2 className="py-3 fw-bold">Projects</h2>
      {projects.map((p) => (
        <div className="card mb-3 bg-light project" key={Math.random()}>
          <div className="row">
            <div className="col-md-4">
              <img
                src={p.image}
                className="img-fluid rounded-start"
                alt="weatherapp"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title text-center fw-bold">{p.name}</h3>
                <h5 className="card-title">Description</h5>
                <p className="card-text">{p.description}</p>
                <h5 className="card-title d-none d-lg-block">
                  Project Difficulties & Solution
                </h5>
                <p className="card-text  d-none d-lg-block">{p.reflex}</p>
                <h5 className="card-title">Teachnologies Used</h5>
                <div className="card-text">
                  <div className="row">
                    <div className="col-4">
                      <i className="bi bi-bug-fill text-danger"></i> {p.tech1}
                    </div>
                    <div className="col-4">
                      <i className="bi bi-bug-fill text-danger"></i> {p.tech2}
                    </div>
                    <div className="col-4">
                      <i className="bi bi-bug-fill text-danger"></i> {p.tech3}
                    </div>
                  </div>

                  <div className="row pt-3">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                      <a
                        className="btn btn-primary rounded-pill"
                        href={p.code}
                        role="button"
                      >
                        <i className="bi bi-github"></i> Source Code
                      </a>
                      <a
                        className="btn btn-primary  rounded-pill"
                        href={p.live}
                        role="button"
                      >
                        <i className="bi bi-pc-display-horizontal"></i> Live
                        Preview
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
