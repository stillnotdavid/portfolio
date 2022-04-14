import * as React from "react"

import { Link, animateScroll as scroll } from "react-scroll";

import { Button, ProfileCard } from '../../components'

import './style.scss'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__text">
          <h1>👋 Hi, I'm David.</h1>
          <p>I’m a <span class="highlight">UX Designer/Developer</span> based in <span class="highlight">Los Angeles, CA.</span></p>
          <Link to="portfolio" 
            spy={true}
            smooth={true}
            offset={-70}
            duration={400}>
              <Button name="primary" text="View My Work"/>
            </Link>
        </div>
        <ProfileCard name="David Le" location="Los Angeles, CA"/>
      </div>
    </section>
  )
}

export default Hero
