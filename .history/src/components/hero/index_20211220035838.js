import * as React from "react"

import { Button, ProfileCard } from '../../components'

import './style.scss'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__text">
        <h1>Hi, I'm David.</h1>
        <p>I’m a <span class="highlight">UX Designer/Developer</span> based in <span class="highlight">Los Angeles, CA.</span></p>
        <Button name="primary" text="View My Work" to="/"/>
      </div>
      <ProfileCard/>
    </div>
  )
}

export default Hero
