import React from 'react';
import ResumeCard from './ResumeCard';
import resumeData from './resumeData.json';

const Resume = () => {

  const resume_height=650 + (resumeData.length * 450);
  return (
    <section className="resume-section" style={{height:`${resume_height}px`}}>
        <div>
            <div className="square-logo"></div>
            <h4>Resume</h4>
        </div>
        <div>
        <h4>Professional Experience</h4>
        <a href="">download cv</a>
        </div>
        {resumeData.map((items, index) => (
          (items.type=="experience") && 
          <ResumeCard
          key={index}
          type={items.type}
          yearsWorked={items.yearsWorked}
          jobPosition={items.jobPosition}
          companyName={items.companyName}
          companyLocation={items.companyLocation}
          cardDescription={items.cardDescription}
        />
        ))}
        <h4>Formal Education</h4>
        {resumeData.map((items, index) => (
          (items.type=="education") && 
        <ResumeCard
        key={index}
        type={items.type}
        yearsAttended={items.yearsAttended}
        universityName={items.universityName}
        degreeLevel={items.degreeLevel}
        universityLocation={items.universityLocation}
        cardDescription={items.cardDescription}
        />
        ))}
    </section>
  )
}

export default Resume;