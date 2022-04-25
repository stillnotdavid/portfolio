import * as React from "react";
import { Button, Logo } from "../../../components";
import "./style.scss";
import { useStaticQuery, graphql } from "gatsby";

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
        <div className="project__hero"></div>
        <div className="project__header">
          <div className="container">
            <div className="project__name">
              <div className="project__company">M&amp;T Bank</div>
              <h1>Currency Design System</h1>
            </div>
            <a
              className="button button--secondary"
              href="currency-design-system.netlify.app"
            >
              View Live Site
            </a>
            <div className="project__info">
              <div className="project__overview">
                <h2>Overview</h2>
                <p>
                  Currency is the official design system of{" "}
                  <a href="https://mtb.com">M&amp;T Bank</a>, used by numerous
                  design and engineering teams. It is comprised of three parts,
                  the Figma component library, the codebase, and the
                  documentation standalone site.
                </p>
                <p>
                  I joined the bank's Customer Experience Design team in 2019 as
                  the second UX Engineer on the Design System team. For the last
                  3 years, my focus at M&amp;T has been on building Currency
                  from the ground up and continuing to grow it, as the company
                  considers it as its own product.
                </p>
              </div>
              <div className="project__role">
                <h3>Lead Developer:</h3>
                <ul>
                  <li>
                    I'm currently leading the engineering efforts of Currency,
                    including managing the front-end technology stack,
                    development standards and conventions, approving all pull
                    requests, and responsible for all releases and updates.
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
          </div>
          <div className="project__body">
            <h2>Currency's Figma Library</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
