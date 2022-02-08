import React from 'react';
import "./footer.scss";
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-scroll"


const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className='d-flex'>
              <p>Sydney, Australia</p>
            </div>
            {/* <div className='d-flex'>
              <a href='mob: 0450708991'>0450708991</a>
            </div> */}
            <div className='d-flex'>
              <p>dumesh77@gmail.com</p>
            </div>
          </div>
          <div className='col-lg-3 col-md-2 col-sm-6'>
            <div className='row'>
              <div className='col'>
                <Link smooth={true} to="home" className='footer-nav'>Home</Link>
                <br/>
                <Link smooth={true} to="about" offset={-85} className='footer-nav'>About Me</Link>
                <br/>
                <Link smooth={true} to="interest" offset={-85} className='footer-nav'>Interest</Link>
                </div>
                <div className='col'> 
                <Link smooth={true} to="portfolio" offset={-85} className='footer-nav'>Portfolio</Link>
                <br/>
                <Link smooth={true} to="contact" offset={-85} className='footer-nav'>Contact</Link>
              </div>
            </div>
          </div>
          <div className='col-lg-5 col-md-5 col-sm-6 align-items-center'>
            <div className='d-flex justify-content-center'>
              <a href='https://www.linkedin.com/in/umesh-dhungana/' target="_blank"><FontAwesomeIcon icon={faLinkedinIn} size='2x' className='mx-3'/></a>
              <a href='https://github.com/UmeshDhungana' target="_blank"><FontAwesomeIcon icon={faGithub} size='2x' className='mx-3'/></a>
            </div>
            <p className='pt-3 text-center'>
              Copyright&copy;
              {new Date().getFullYear()}&nbsp; | Umesh Dhungana
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer;
