import React from 'react';
import "./about.scss";
import myPic from "../../assets/umesh.jpg";

const About = () => {
  return (
    <div className='container py-5 about-main'>
      <div className='row'>
        <div className='col-lg-4 col-md-4 col-xs-12'>
          <div className='photo-wrap mb-5' >
            <img className='profile-pic' src={myPic} alt='my photo' />
          </div>
        </div>
        <div className='col-lg-8 col-md-8 col-xs-12'>
          <h1 className='about-heading'>About Me</h1>
          <p className='about-content'>
          Completed Master’s of Computer Science (software engineering) from Federation University, I am seeking career in Web Development and related technologies. I am passionate about coding and solving problems through code, and I am looking forward to any opportunity that best fits my knowledge and interest.
          I have strong knowledge on implementing software engineering principles and problem-solving skills. I have proficient knowledge on Python, Solidity, JavaScript and Database.  Interested in AI, ML, Automation, Blockchain and DApps.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

