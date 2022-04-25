import * as React from "react";

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
      <SimpleReactLightbox>
        <div className="container">
          <header className={`header ${this.state.sticky && "header--sticky"}`}>
            <div className="header__container">
              <Logo />
            </div>
          </header>
          <div className="project__gallery">
            <SRLWrapper>
              {allFile.edges.map((images) => (
                <GatsbyImage image={getImage(images.node)} />
              ))}
            </SRLWrapper>
          </div>
        </div>
      </SimpleReactLightbox>
    </div>
  );
};

export default ProjectPage;
