import React from 'react'
import "./portfolio.scss"
import captcha from "../../assets/portfolio/captcha.jpeg"
import unfollow from "../../assets/portfolio/unfollow-insta.jpeg"
import calculator from "../../assets/portfolio/calculator.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'

import { PopupboxManager, PopupboxContainer } from 'react-popupbox'

import "react-popupbox/dist/react-popupbox.css"


const Portfolio = () => {

  //captcha
  const openPopBoxCaptcha = () => {
    const content = (
      <>
      <img className='portfolio-img-popup' src={captcha} alt='Captcha Image...'/>
      <p>I have decoded simple text based captcha using neural network and image peocessing. This project was done in Python</p>
      <b>GitHub:</b><a className='hyper-link' onClick={() => window.open("https://github.com/UmeshDhungana/DecodingCaptcha")}>https://github.com/UmeshDhungana/DecodingCaptcha</a>
    </>
    )
    PopupboxManager.open({content})
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Decoding Captcha Project",
        },
      },
    });
  }

  const configPopBoxCaptcha = {
    titleBar: {
      enable: true,
      text: "Decoding Captcha Project"
    },
    fadeIn: true,
    fadeInSpeed: 500,
  }

    //insta
    const openPopBoxUnfollow = () => {
      const content = (
        <>
        <img className='portfolio-img-popup' src={unfollow} alt='Insta Unfollow Image...'/>
        <p>This is a automation project to find out the unfollowers that you have followed in instagram. This project was done in python 3.8 and uses selenium web driver for automation.</p>
        <b>GitHub:</b><a className='hyper-link' onClick={() => window.open("https://github.com/UmeshDhungana/InstaUnfollowers")}>https://github.com/UmeshDhungana/InstaUnfollowers</a>
      </>
      )
      PopupboxManager.open({content})
      PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "InstaUnfollowers List Automation",
          },
        },
      });
    }
  
    const configPopBoxUnfollow = {
      titleBar: {
        enable: true,
        text: "InstaUnfollowers List Automation"
      },
      fadeIn: true,
      fadeInSpeed: 500,
    }

//calculator
const openPopBoxCalculator = () => {
  const content = (
    <>
    <img className='portfolio-img-popup' src={calculator} alt='Calculator Image...'/>
    <p>This is a simple calculator web app project done using plain javascript, html and css.</p>
    <b>GitHub:</b><a className='hyper-link' onClick={() => window.open("https://github.com/UmeshDhungana/Calculator")}>https://github.com/UmeshDhungana/Calculator</a>
  </>
  )
  PopupboxManager.open({content})
  PopupboxManager.update({
    content,
    config: {
      titleBar: {
        text: "Calculator App using JS",
      },
    },
  });
}

const configPopBoxCalculator = {
  titleBar: {
    enable: true,
    text: "Calculator App using JS"
  },
  fadeIn: true,
  fadeInSpeed: 500,
}


  return (
    <div id='portfolio' className='portfolio-wrapper'>
      <div className='container'>
        <h1 className='text-uppercase text-center py-5'>Portfolio</h1>
        <div className='image-box-wrapper row justify-content-center'>
          <div className='portfolio-image-box col' onClick={openPopBoxCaptcha}>
            <img className='portfolio-image' src={captcha} alt='Captcha Image'/>
            <div className='over-flow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
       
          <div className='portfolio-image-box col' onClick={openPopBoxUnfollow}>
            <img className='portfolio-image' src={unfollow} alt='Insta unfollow Image'/>
            <div className='over-flow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
        
          <div className='portfolio-image-box col' onClick={openPopBoxCalculator}>
            <img className='portfolio-image' src={calculator} alt='Calculator Image'/>
            <div className='over-flow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>

          <div className='portfolio-image-box col'>
            <img className='portfolio-image' src={unfollow} alt='Insta unfollow Image'/>
            <div className='over-flow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...configPopBoxCaptcha}/>
      <PopupboxContainer {...configPopBoxUnfollow}/>
      <PopupboxContainer {...configPopBoxCalculator}/>

    </div>
  )
}

export default Portfolio
