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
            <h2>Initial Thoughts</h2>
            <p>
              The major problem the client had with the current website was that
              it did not look <strong>modern or professional</strong> enough.
              Although a valid concern, this would naturally be solved in a
              redesign, as from a design standpoint, this is the most straight
              forward problem to solve.
            </p>
            <h3>Making something more 'modern' and 'professional'</h3>
            <ul>
              <li>
                The concept of modernizing something seems very intrisical to
                designers, but the perception of 'modern' can be quite
                subjective. It's important to be aware of the target audience,
                and also the client themselves, whom in this specific scenario
                are well-versed in interior design and architecture.
              </li>
              <li>
                Because there weren't any branding guidelines to go off of, the
                visual language of the entire new site would have to be built
                from scratch, which comes with both a lot of creative freedom,
                as well as challenges, since the new look and feel of the site
                would have to properly reflect the hotel's historical, luxurious
                feel while fulfilling the requirement of being modern.
              </li>
              <li>
                While invisible on the surface, Wix's sitebuilder can be clunky,
                causing higher than optimal load times, which in turn creates a
                more dated experience for users. An upgrade in technology can
                certainly add to the feeling of 'professional' and 'modern'.
              </li>
              <li>
                Professionalism in visual design is almost always attributed to
                proper use of basic design theory concepts, something the
                original website was undoubtedly lacking.
              </li>
            </ul>
            <h2>Objectives</h2>
            <ul>
              <li>
                <strong>
                  Make the site feel more modern and professional.
                </strong>
              </li>
              <li>
                To do this, first and foremost: improve the usability,
                information architecture, and navigation of the site. Nothing is
                more unprofessional than a confusing user experience.
              </li>
              <li>Second, improve the performance and SEO of the site.</li>
              <li>
                Make it easier to book a room, which is ultimately the
                conversion that the business would want.
              </li>
              <li>Create a new visual language and branding identity.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
