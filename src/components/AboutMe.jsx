import React from 'react'

const AboutMe = () => {

  const brief_paragraph = "​I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.";

  return (
    <section className="about-me-section">
      <div className="about-me-float">
        <div className="profile-card">
          <img src="/images/nikita.png" alt="head shot" />
          <h3>Nikita Van</h3>
          <div className="vertical-line"></div>
          <p>FRONT-END DEVELOPER</p>
          <div className="social-icons">
            <img src="/images/github.png" alt="github" />
            <img src="/images/linkedin.png" alt="linkedin" />
            <img src="/images/mail.png" alt="email" />
          </div>
        </div>
        <div className="intro-p">
          <h1>Hello</h1>
          <h5>Here's who I am & what I do</h5>
          <div className="button-container">
            <a href="">RESUME</a>
            <a href="">PROJECTS</a>
          </div>
          
          <p>{brief_paragraph}</p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;