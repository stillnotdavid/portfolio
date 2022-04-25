import * as React from "react";
import { Logo } from "../../../components";
import "./style.scss";
import { useStaticQuery, graphql } from "gatsby";

import hero from "../../../images/projects/edward/hero.png";
import "../../../styles/main.scss";

// markup
const ProjectPage = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: ASC }
          filter: { relativeDirectory: { eq: "projects/csgostats" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    `
  );

  return (
    <div className="currency">
      <header className={`header`}>
        <div className="header__container">
          <Logo />
        </div>
      </header>
      <div className="project">
        <div className="container">
          <div className="project__hero">
            <img src={hero} />
          </div>
          <div className="project__header">
            <div className="project__name">
              <div className="project__company">Freelance Project</div>
              <h1>The Edward Hotel</h1>
            </div>
            <a className="button button--secondary" href="theedwardbuffalo.com">
              Visit Live Site
            </a>
          </div>
          <div className="project__info">
            <div className="project__overview">
              <h2>Overview</h2>
              <p>
                The lovely folks at The Edward Hotel contacted me regarding a
                website redesign of their previous Wix site for a boutique hotel
                in my hometown.
              </p>
            </div>
            <div className="project__role">
              <h3>Lead Engineer:</h3>
              <ul>
                <li>
                  I'm currently leading the engineering efforts of Currency,
                  including managing the front-end technology stack, development
                  standards and conventions, approving all pull requests, and
                  responsible for all releases and updates.
                </li>
              </ul>
              <h3>Designer:</h3>
              <ul>
                <li>
                  During its inception, the team was small, so I filled the
                  designer role for several components, as well as fully
                  building the documentation site from scratch.
                </li>
                <li>
                  As a member of the UX team, I am involved in any discussions
                  regarding the design of components and providing guidance on
                  how they are used.
                </li>
              </ul>
            </div>
          </div>

          <div className="project__body">
            <h2>Challenges</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
