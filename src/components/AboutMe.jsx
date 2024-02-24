import React from 'react';
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const AboutMe = () => {

  const brief_paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <section className="about-me-section">
      <div className="about-me-float">
        <div className="profile-card">
          <img src="images/nikita.png" alt="head shot" />
          <h3>Nikita Van</h3>
          <div className="vertical-line"></div>
          <p>FRONT-END DEVELOPER</p>
          <div className="social-icon-container">
            <TbBrandGithubFilled className="social-icons"/>
            <FaLinkedinIn className="social-icons"/>
            <MdEmail className="social-icons"/>
          </div>
        </div>
        <div className="intro-p">
          <h1>Hello</h1>
          <h5>Here's who I am & what I do</h5>
          <div className="button-container">
            <a href="#resume-placemark">RESUME</a>
            <a href="#projects-section">PROJECTS</a>
          </div>
          <p>{brief_paragraph}</p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;