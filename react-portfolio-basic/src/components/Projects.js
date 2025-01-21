import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    { name: "Portfolio Website", description: "A personal portfolio created using React.", link: "#" },
    { name: "Brain Tumor Detection", description: "A deep learning model for detecting brain tumors.", link: "#" }
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;