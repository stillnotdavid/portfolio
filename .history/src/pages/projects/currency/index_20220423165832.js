import * as React from "react";
import { Logo } from "../../../components";

import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

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
    <div>
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
              <h3>Overview</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
