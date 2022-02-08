import React from "react";
import "./header.scss"
import Typed from "react-typed"
import { Link } from "react-scroll"



const Header = () => {
  return (
    <div id="home" className="header-wrap">
      <div className="main-info">
        <h1> I am Umesh Dhungana..</h1>
        {/* <span className="typed-text">Working On</span> */}
        <Typed 
          className="typed-text"
          strings={["Design", "Development", "Automation", "Machine Learning"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link smooth={true} to="contact" offset={-85} href="#" className="main-info-btn">Contact Me</Link>
      </div>
    </div>
  )
}

export default Header