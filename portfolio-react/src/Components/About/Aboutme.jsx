import React from 'react';
import "./Aboutme.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/Profileimg.png";

const Aboutme = () => {
  return (
    <div id="about" className='about'>
      <div className="about-title">
        <h1> About me</h1>
        <img src={theme_pattern} alt=""/>
      </div>
      <div className='about-sections'>
        <div className='about-left'>
        <img src={profile_img} alt=""  />

        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am a Software Developer based in Canada, specializing in full-stack development.</p>
            <p>With a strong foundation in both front-end and back-end technologies, I build seamless and efficient web applications. My expertise includes working with modern frameworks such as React, Node.js, and Express.</p>
            <p>Driven by a passion for continuous learning, I keep myself updated with the latest industry trends and best practices. I am dedicated to writing clean, maintainable code and creating user-friendly interfaces.</p>
            <p>Beyond coding, I enjoy collaborating with cross-functional teams to bring ideas to life and solve complex problems. In my free time, I love exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Project Management</p>
              <hr style={{ width: '70%' }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: '90%' }} />
            </div>
            <div className="about-skill">
              <p>React.js</p>
              <hr style={{ width: '70%' }} />
            </div>
            <div className="about-skill">
              <p>Cloud Computing</p>
              <hr style={{ width: '80%' }} />
            </div>
            <div className="about-skill">
              <p>Data Mining</p>
              <hr style={{ width: '85%' }} />
            </div>
            <div className="about-skill">
              <p>Machine Learning</p>
              <hr style={{ width: '60%' }} />
            </div>
            <div className="about-skill">
              <p>Computer Networking</p>
              <hr style={{ width: '90%' }} />
            </div>
            <div className="about-skill">
              <p>Programming Languages</p>
              <hr style={{ width: '90%' }} />
            </div>
            <div className="about-skill">
              <p>Data Structures</p>
              <hr style={{ width: '85%' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-acheivements">
      <div className="about-acheivement">
        <h1>20+</h1>
        <p> PROJECTS COMPLETED</p>
      </div>
      <hr />
      <div className="about-acheivement">
        <h1>4+</h1>
        <p> CERTIFICATES</p>
      </div>
      <hr />
      <div className="about-acheivement">
        <h1>2</h1>
        <p>DEGREES</p>
      </div>
      <hr />
    </div>
    </div>
  );
};

export default Aboutme;
