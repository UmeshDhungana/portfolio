import "./navbar.scss"
import React from "react"
import myLogo from "../../assets/LogoBlack.png"
import { Link } from "react-scroll"
//react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"


const  Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo" src={myLogo} alt="Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{color: "#fff"}} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home"  className="nav-link" href="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="about" offset={-85} className="nav-link" href="#">about me</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="interest" offset={-85} className="nav-link" href="#">interest</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="portfolio" offset={-85} className="nav-link" href="#">portfolio</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="contact" offset={-85} className="nav-link" href="#">contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
