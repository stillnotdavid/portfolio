import * as React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import Particles from "react-tsparticles";
import {
  Layout,
  Button,
  ProfileCard,
  JobCard,
  ProjectCard,
} from "../components";

import "../styles/main.scss";

import jobs from "../data/jobs.json";

import projects from "../data/projects.json";

import profile from "../data/profile.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// markup
const IndexPage = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Layout>
      <section className="hero" id="about">
        <div className="container hero__container">
          <div className="hero__text">
            <h1>Hi, I'm David.</h1>
            <p>
              I’m a <span class="highlight">UX Designer/Developer</span> based
              in <span class="highlight">Los Angeles, CA.</span>
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
          <ProfileCard
            name="David Le"
            location="Los Angeles, CA"
            facts={profile.facts}
          />
        </div>
      </section>
      <section className="timeline" id="resume">
        <div className="container timeline__container">
          <h2>Who I've Worked With</h2>
          <p>Donec ullamcorper nulla non metus auctor fringilla.</p>
          <div className="timeline__jobs">
            {jobs.jobs.map((job) => (
              <JobCard
                type={job.type}
                logo={job.logo}
                title={job.title}
                time={job.time}
                name={job.name}
                current={job.current}
                more={job.more}
              />
            ))}
          </div>
          <div className="timeline__resume">
            <Button name="primary" text="Download Resume" />
          </div>
        </div>
      </section>
      <section className="portfolio" id="portfolio">
        <div className="container portfolio__container">
          <h2>What I've Worked On</h2>
          <p>Donec ullamcorper nulla non metus auctor fringilla.</p>
          <div className="portfolio__projects">
            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{
                background: {
                  color: {
                    value: "#111",
                  },
                },
                fpsLimit: 120,
                interactivity: {
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onHover: {
                      enable: true,
                      mode: "repulse",
                    },
                    resize: true,
                  },
                  modes: {
                    bubble: {
                      distance: 400,
                      duration: 2,
                      opacity: 0.8,
                      size: 40,
                    },
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                  },
                },
                particles: {
                  color: {
                    value: "#999",
                  },
                  links: {
                    color: "#aaa",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                  },
                  collisions: {
                    enable: true,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 6,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      area: 400,
                    },
                    value: 80,
                  },
                  opacity: {
                    value: 0.25,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    random: true,
                    value: 5,
                  },
                },
                detectRetina: true,
              }}
            />
            <Carousel
              className="portfolio__carousel"
              show={3}
              slide={3}
              swiping={true}
              leftArrow={
                <div className="portfolio__carousel-arrow">
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    size="2x"
                    className="portfolio__carousel-arrow-svg"
                  />
                </div>
              }
              rightArrow={
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size="2x"
                  className="portfolio__carousel-arrow-svg"
                />
              }
            >
              {projects.projects.map((project) => (
                <ProjectCard
                  name={project.name}
                  description={project.description}
                  roles={project.roles}
                  image={project.image}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="container contact__container">
          <h2>Get In Touch</h2>
          <p>If you have any questions, feel free to reach out to me!</p>
          <form className="contact__form" action="">
            <div className="contact__form-item">
              <label className="form__label" htmlFor="name">
                Name
              </label>
              <input
                className="form__input"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="contact__form-item">
              <label className="form__label" htmlFor="name">
                Email
              </label>
              <input
                className="form__input"
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <div className="contact__form-item">
              <label className="form__label" htmlFor="name">
                Message
              </label>
              <textarea
                className="form__input"
                type="text"
                placeholder="Enter your message"
                rows="10"
              />
            </div>
            <button className="button button--form">Send It</button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
