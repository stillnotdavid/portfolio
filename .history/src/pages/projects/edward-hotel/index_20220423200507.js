import * as React from "react";
import { Logo } from "../../../components";
import "./style.scss";
import { useStaticQuery, graphql } from "gatsby";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

import before from "../../../images/projects/edward/before.jpg";
import after from "../../../images/projects/edward/after.jpeg";
import hero from "../../../images/projects/edward/hero.png";
import "../../../styles/main.scss";

const SECOND_IMAGE = {
  imageUrl: "images/projects/edward/hero.png",
};
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
                The lovely folks at The Edward Hotel contacted me via a referral
                regarding a website redesign of their previous Wix site for a
                local boutique hotel. The website serves primarily as an
                informational portal for customers to book a room through a
                third-party site.
              </p>
              <p>
                I took on this project solo, as both the designer and developer.
                Working closely with the client and an additional Content
                Writer, I was able to take the site from start to finish and
                launched within three weeks.
              </p>
            </div>
            <div className="project__role">
              <h3>Design:</h3>
              <ul>
                <li>
                  Without any previous guidelines, I was given full creative
                  freedom to rebrand their beautiful hotel's digital presence.
                </li>
                <li>
                  The new website was redesigned from scratch without any
                  requirements of keeping traces of the old site.
                </li>
              </ul>
              <h3>Development:</h3>
              <ul>
                <li>
                  After the consultation, we decided to forsake a CMS and opted
                  to use GatsbyJS for React's snappy load times and versatility,
                  to create the best experience possible for the user.
                </li>
                <li>
                  While it is a small site, I built the front-end using
                  system-based components and an advanced SCSS architecture to
                  ensure that it could scale if ever necessary.
                </li>
              </ul>
            </div>
          </div>
          <div className="project__body">
            <section className="before-after">
              <h2>Before &amp; After</h2>
              <SimpleReactLightbox>
                <SRLWrapper>
                  <img className="before-after__image" src={before} />
                  <img className="before-after__image" src={after} />
                </SRLWrapper>
              </SimpleReactLightbox>
            </section>
            <h2>Objectives</h2>
            <h3>Cient Issues:</h3>
            <ul>
              <li>
                After the consultation, we decided to forsake a CMS and opted to
                use GatsbyJS for React's snappy load times and versatility, to
                create the best experience possible for the user.
              </li>
              <li>
                While it is a small site, I built the front-end using
                system-based components and an advanced SCSS architecture to
                ensure that it could scale if ever necessary.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
