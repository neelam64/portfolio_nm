import React from "react";
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "10 Things To Know About Azure Static Web Apps 🎉",
    description:
      "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "LinkedIn Profile",
    description:
      "My LinkedIn profile where I share my experiences and connect with others.",
    url: "https://www.linkedin.com/in/neelam-mangnani-51912b22b/",
  },
  {
    title: "Python HTTP API Workshop",
    description:
      "A workshop to help teach how to use Python to create an HTTP API.",
    url: "https://neelam64.github.io/PythonHTTP_APIWorkshop/",
  },
  {
    title: "Static Web Apps API Workshop",
    description:
      "A workshop to help teach how to use Azure Functions to create an API for a Static Web App.",
    url: "https://neelam64.github.io/mystaticapp/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding portfolio-section" id="portfolio">
      <h3 style={{ textAlign: "center" }}>Portfolio</h3>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
