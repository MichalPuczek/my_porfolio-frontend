import React from "react"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import CV from '../assets/CV_MichalPuczek.pdf'

const Hero = () => {

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline--animated"></div>
            <h1>Michal Puczek</h1>
            <h4>Développeur Fullstack JavaScript | React</h4>
            <div className="hero-container">
              <Link to="/contact" className="btn">
                Contactez moi
              </Link>
              <a href={CV} target="_blank" download="Michal Puczek_CV" className="btn2">Téléchargez CV (.pdf)</a>
              <SocialLinks />
            </div>
          </div>
        </article>
      </div>
    </header>
  )
}

export default Hero
