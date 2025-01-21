import React from 'react';
import './Skills.css';

function Skills() {
  const skills = ["React", "Node.js", "MongoDB", "Python", "JavaScript","Java","Express.js"];

  return (
    <section className="skills">
      <h2>My Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;