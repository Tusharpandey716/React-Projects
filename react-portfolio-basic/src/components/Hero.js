import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <img
        src={`${process.env.PUBLIC_URL}/Tushar.jpg`}
        alt="Tushar Pandey"
        className="hero-photo"
      />
      <h1>Tushar Pandey</h1>
      <p>Welcome to my portfolio!</p>
    </div>
  );
};

export default Hero;
