import * as React from "react";
import {
  Layout,
  Button,
  ProfileCard,
  JobCard,
  ProjectCard,
} from "../../../components";

import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

import "../../../styles/main.scss";

// markup
const EseaClientPage = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: ASC }
          filter: { relativeDirectory: { eq: "projects/esea-client" } }
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

  return <Layout>hi</Layout>;
};

export default EseaClientPage;
