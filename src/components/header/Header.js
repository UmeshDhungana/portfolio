import React from "react";
import "./header.scss"
import Typed from "react-typed"


const Header = () => {
  return (
    <div className="header-wrap">
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
        <a href="#" className="main-info-btn">Contact Me</a>
      </div>
    </div>
  )
}

export default Header