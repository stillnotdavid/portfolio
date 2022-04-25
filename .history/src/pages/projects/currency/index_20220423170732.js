import * as React from "react";
import { Logo } from "../../../components";
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
        <div className="container">
          <div className="project__hero"></div>
          <div className="project__header">
            <div className="project__name">
              <div className="project__company">M&amp;T Bank</div>
              <h1>Currency Design System</h1>
            </div>
            <div className="project__info">
              <h2>Overview</h2>
              <p>
                Currency is the official design system of{" "}
                <a href="https://mtb.com">M&amp;T Bank</a>, used by numerous
                design and engineering teams. I joined the bank's customer
                experience design team in 2019 as the second designer on the
                Design System team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;