import * as React from "react";
import { Logo } from "../../../components";
import "./style.scss";
import { useStaticQuery, graphql } from "gatsby";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

import before from "../../../images/projects/edward/before.jpg";
import after from "../../../images/projects/edward/after.jpeg";
import hero from "../../../images/projects/edward/hero.png";
import userflow from "../../../images/projects/edward/userflow.png";
import visuals from "../../../images/projects/edward/visual.png";
import findRooms from "../../../images/projects/edward/find-rooms.jpg";
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
                Third, make it easier to book a room, which is ultimately the
                conversion that the business would want.
              </li>
              <li>
                Forth, utilize and showcase the hotel's beautiful photos that
                were already available.
              </li>
              <li>
                Last but not least, create a new visual language and branding
                identity.
              </li>
            </ul>
            <h2>Challenges</h2>
            <ul>
              <li>
                Content is the most important part of an informational website,
                and well-written copy is crucial to the overall experience for
                the user. The old copy was very unprofessional and the language
                was inconsistent across the board. To address this, I suggested
                bringing in a professional content writer to help us revamp all
                the copy on every page.
              </li>
              <li>
                The new branding has to look modern in the digital space, while
                maintaining some sort tie to the hotel's own signature look in
                person. Fortunately, because the client had so many high quality
                photos of the hotel, this was much easier to accomplish.
              </li>
              <li>
                Because the new website is so rich in photography, a traditional
                static HTML and CSS site would not only be difficult to build
                efficiently, but performance would be a huge issue. To address
                this, I opted to use React, specifically GatsbyJS, a static site
                generator, to fully utilize newer technology that would help
                with performance and buildability, without worrying about a
                backend and security issues that would come with it.
              </li>
              <li>
                The hotel uses an external booking software that syncs calendars
                across other booking sites such as Expedia. How do I send the
                user off to a third-party site feeling satisfied and confident
                enough to successfully book a room?
              </li>
            </ul>
            <h2>Identifying Problems</h2>
            <div className="problems">
              <div>
                <SimpleReactLightbox>
                  <SRLWrapper>
                    <img className="before-after__image" src={before} />
                  </SRLWrapper>
                </SimpleReactLightbox>
              </div>
              <div>
                <ul>
                  <li>
                    The website does not show users anything about the actual
                    hotel before forcing them out to an external website to book
                    a room. Without the precedented goal of booking a room at
                    this specific hotel beforehand, users are unlikely to
                    convert.
                  </li>
                  <li>
                    The poor use of typography heavily contributes to the
                    perception of 'dated' and 'unprofessional'.
                  </li>
                  <li>The poor use of color makes text unreadible.</li>
                  <li>
                    There is not enough content for the pages that are currently
                    set up, creating the perception of them being incomplete.
                  </li>
                  <li>
                    The poor use of photography not only wastes an abundance of
                    valuable assets, but contributes to the website looking
                    unprofessional.
                  </li>
                </ul>
              </div>
            </div>
            <h2>Information Architecture</h2>
            <p>
              To order to properly plan out the new site, it was crucial to map
              out all the information that the site offers its users through a
              user flow map.
            </p>
            <img src={userflow} />
            <ul>
              <li>
                The Explore page on the old site was essentially useless, so it
                was removed completely.
              </li>
              <li>
                The Contact Us page was moved to be a component that exists at
                the bottom of every page to ensure that users are able to
                quickly send messages to the hotel.
              </li>
              <li>
                While booking a room is the ultimate conversion, to ensure that
                it would not fall through, users are provided with more
                information around the rooms before being allowed to book. For
                users who have precedented goals of booking, the Book Now button
                remains at the top level navigation, which is fixed on every
                page.
              </li>
              <li>
                Private Events was condensed into a smaller component sitting on
                the homepage.
              </li>
            </ul>
            <h2>New Visuals</h2>
            <img src={visuals} />

            <h3>Logo</h3>
            <p>
              Because the budget did not allow for a new logo design (and I am
              not a logo designer), I simply revamped it to appear fit the new
              design style, changing the typeface to Avenir Next Condensed, a
              more visually appealing and modern apporach. I also changed the
              decorative line on the left to the new primary gold color, giving
              it a nice accent. An alternative horizontal logo was made for
              instances where the responsiveness of the site makes the stacked
              logo too small to view.
            </p>
            <h3>Typography</h3>
            <p>
              One of the Edward's most notable charactistics is that it becomes
              a historical, classic look with a modernized approach to the hotel
              experience. To reflect this, I paired Lora with Noto Sans. The
              elegant serifs in Lora that is primarily used for contextual
              content, such as paragraph texts and titles, showcases the hotel's
              timeless classical design. For user-interactive content, such as
              buttons, navigations, forms, and text fields, Noto Sans provides a
              sleek modern touch, reflecting the hotel's modern approach at how
              it handles bookings and check-in's.
            </p>
            <h3>Color</h3>
            <p>
              The new primary brand color is a sharp gold, slightly different
              from the previous yellow, which reflects the luxuriousness of the
              hotel when paired on black. This is used sparingly throughout the
              site, for accents or highlights and CTAs. The secondary colors are
              all subtle, muted palettes found in the rooms of the actual hotel
              rooms.
            </p>
            <h2>Booking a Room</h2>
            <img src={findRooms} />
            <p>
              One of the most prominent additions to the new website is the
              ability to find a room from the current webpage. Bookings are 100%
              handled on an external third-party website, but previously users
              had to also find rooms on the third-party site as well. This new
              Find Rooms component allows users to do all the browsing on the
              hotel website before being sent off.
            </p>
            <p>
              This is technically possible because the room searching parameters
              are located in the URL of the third-party site. I was able to
              utilize AirBnb's calendar picker component to dynamically generate
              a link with the desired search parameters, ensuring that users
              stay on the main website for as long as possible. By default, the
              current dates are automatically populated via MomentJS.
            </p>
            <h2>The New Rooms Page</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
