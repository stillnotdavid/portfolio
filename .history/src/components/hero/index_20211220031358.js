import * as React from "react"

import { Button } from '../../components'

import './style.scss'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__text">
        <h1>Hi, I'm David.</h1>
        <p>I’m a UX Designer/Developer based in Los Angeles, CA.</p>
        <Button primary="true">View My Work</Button>
      </div>
    </div>
  )
}

export default Hero
