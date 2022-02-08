import React from 'react'
import "./interest.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle, faEthereum } from '@fortawesome/free-brands-svg-icons'
import { faBolt, faCode, faRobot } from '@fortawesome/free-solid-svg-icons'




const Interest = () => {
  return (
    <div id='interest' className='interests'>
      <h1 className='py-5'>My Interests</h1>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 col-sm-6'>
              <div className='box'>
                <div className='circle'><FontAwesomeIcon className='icon' icon={faCode} size='2x'/></div>
                <h3>Web Development</h3>
                <p>I am interested on web development and also have proficient knowledge on latest technologies. </p>
              </div>
            </div>
            {/* - <i class="fa-regular fa-bolt-auto"></i> */}
            <div className='col-md-3 col-sm-6'>
              <div className='box'>
              <div className='circle'><FontAwesomeIcon className='icon' icon={faBolt} size='2x'/></div>
                <h3>Automation</h3>
                <p>Automation is the magic like feeling. I have worked on some personal automation project, specifically using selenium.</p>
              </div>
            </div>
            {/* - */}
            <div className='col-md-3 col-sm-6'>
              <div className='box'>
              <div className='circle'><FontAwesomeIcon className='icon' icon={faRobot} size='2x'/></div>
                <h3>Machine Learning</h3>
                <p>I am facinated with what can be done with Machine Learning and have done some personal projects as well. I am learning different aspects of ML everyday.</p>
              </div>
            </div>
            {/* - */}
            <div className='col-md-3 col-sm-6'>
              <div className='box'>
              <div className='circle'><FontAwesomeIcon className='icon' icon={faEthereum} size='2x'/></div>
                <h3>Blockchain Technology</h3>
                <p>I beleive blockchain technology is the future so why not learn it now. I have huge interest in this technolgy and learning everyday to be blockchain app developer. </p>
              </div>
            </div>
            {/* - */}
          </div>
        </div>
      </div>
  )
}

export default Interest
