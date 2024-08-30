// Hero.js
import React, { useState, useEffect } from 'react';
import './Hero.css'; // Ensure this path is correct
import profile_img from "../../assets/profile.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const professions = [
    "a Telecom Network Engineer",
    "a CS Student",
    "a Geek",
    "a Project Manager",
    "a Software Developer"
  ];

  const [currentProfession, setCurrentProfession] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentProfession((prevProfession) => (prevProfession + 1) % professions.length);
    }, 1500); // Change profession every 1.5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [professions.length]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div id="home" className='hero'>
      <img src={profile_img} alt="Profile" className="profile-img" />
      <div className="hero-content">
        <h1>I'm <span>Pahuldeep Singh</span></h1>
        <p className="dynamic-text">{professions[currentProfession]}</p>
        <div className="hero-action">
          <AnchorLink offset={50} className="hero-connect" href="#contact" id='anchor'>
            <div className="hero-connect-content">
              Connect with me
            </div>
          </AnchorLink>
        </div>
      </div>
      {showModal && <ResumeModal onClose={closeModal} />}
    </div>
  );
};

export default Hero;
