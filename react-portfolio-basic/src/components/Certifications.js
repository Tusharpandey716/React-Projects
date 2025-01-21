import React from 'react';
import './Certifications.css';

function Certifications() {
  const certifications = [
    "Meta Frontend Engineering",
    "IBM AI Engineering",
    "Generative AI Fundamentals"
  ];

  return (
    <section className="certifications">
      <h2>Certifications</h2>
      <ul>
        {certifications.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
    </section>
  );
}

export default Certifications;