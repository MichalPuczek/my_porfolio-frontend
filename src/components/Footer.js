import React from "react"
import SocialLinks from "../constants/socialLinks"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-pageLinks">
        <Link to="/" className="footer-pageLink">
          Accueil
        </Link>
        <Link to="/" className="footer-pageLink">
          About me
        </Link>
        <Link to="/" className="footer-pageLink">
          Expérience
        </Link>
        <Link to="/" className="footer-pageLink">
          Formation
        </Link>
        <Link to="/" className="footer-pageLink">
          Projets
        </Link>
        <Link to="/" className="footer-pageLink">
          Contact
        </Link>
      </div>
      <div className="copyrights">
        <p>
          copyright&copy;{new Date().getFullYear()}
          <span> Michal Puczek</span>
        </p>
      </div>
      <div className="footer-socialLinks">
        <SocialLinks></SocialLinks>
      </div>
    </footer>
  )
}

export default Footer
