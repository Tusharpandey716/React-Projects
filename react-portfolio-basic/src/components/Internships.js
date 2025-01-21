import React from 'react';
import './Internships.css';

function Internships() {
  const internships = [
    { company: "EISystems", role: "Full-Stack Developer" },
    { company: "Edunet", role: "AI Intern" }
  ];

  return (
    <section className="internships">
      <h2>Internships</h2>
      <ul>
        {internships.map((internship, index) => (
          <li key={index}>
            <h3>{internship.company}</h3>
            <p>{internship.role}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Internships;