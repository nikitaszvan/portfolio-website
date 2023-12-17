import React from 'react';
import ResumeCard from './ResumeCard';

const Resume = () => {
  return (
    <section className="resume-section">
        <div>
            <div className="square-logo"></div>
            <h4>Resume</h4>
        </div>
        <h4>Professional Experience</h4>
        <a href="">download cv</a>
        <ResumeCard
        type = 'experience'
        yearsWorked = "2035 - Present"
        jobPosition = "JOB POSITION"
        companyName= "Company Name"
        companyLocation= "Company Location"
        cardDescription= "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you."
        />
        <h4>Formal Education</h4>
        <ResumeCard
        type = 'education'
        yearsAttended = "2035 - 2035"
        universityName = "UNIVERSITY NAME"
        degreeLevel= "Degree Level"
        universityLocation= "University Location"
        cardDescription= "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you."
        />
    </section>
  )
}

export default Resume;