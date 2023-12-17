import React from 'react';

const ResumeCard = (props) => {
  return (
    <div className="resume-card">
        <div>
            <h6>{props.type==='experience' ? props.yearsWorked : props.yearsAttended}</h6>
            <p>{props.type==='experience' ? props.jobPosition : props.universityName}</p>
            <p>{props.type==='experience' ? props.companyName : props.degreeLevel}</p>
            <p>{props.type==='experience' ? props.companyLocation : props.universityLocation}</p>
        </div>
        <p>{props.cardDescription}</p>
    </div>
  )
}

export default ResumeCard;