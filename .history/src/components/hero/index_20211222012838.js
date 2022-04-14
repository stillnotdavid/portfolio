import * as React from "react";

import { Button, ProfileCard } from "../../components";

import "./style.scss";

const Hero = () => {
  return (
    <section className="hero" id="about">
      <div className="container hero__container">
        <div className="hero__text">
          <h1>👋 Hi, I'm David.</h1>
          <p>
            I’m a <span class="highlight">UX Designer/Developer</span> based in{" "}
            <span class="highlight">Los Angeles, CA.</span>
          </p>
          <Button
            name="primary"
            text="View My Work"
            to="portfolio"
            duration="400"
            offset={-83}
            smooth
          />
        </div>
        <ProfileCard name="David Le" location="Los Angeles, CA" />
      </div>
    </section>
  );
};

export default Hero;
