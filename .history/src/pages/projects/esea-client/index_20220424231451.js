import * as React from "react";
import { Logo } from "../../../components";
import "./style.scss";
import { useStaticQuery, graphql } from "gatsby";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

import before from "../../../images/projects/edward/before.jpg";
import after from "../../../images/projects/edward/after.jpeg";
import hero from "../../../images/projects/esea-client/hero.png";
import userflow from "../../../images/projects/edward/userflow.png";
import visuals from "../../../images/projects/edward/visual.png";
import findRooms from "../../../images/projects/edward/find-rooms.jpg";
import newRooms from "../../../images/projects/edward/new-rooms.jpg";
import gallery from "../../../images/projects/edward/gallery.jpg";
import portal from "../../../images/projects/edward/portal.jpg";
import mobile from "../../../images/projects/edward/mobile.png";
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
              <div className="project__company">ESEA</div>
              <h1>Game Client</h1>
            </div>
          </div>
          <div className="project__info">
            <div className="project__overview">
              <h2>Overview</h2>
              <p>
                ESEA is Counter-Strike: Global Offensive company known for its
                anti-cheat game client that pairs players up with other paid
                users for what is known as an in-house league. Instead of
                playing on Valve's native matchmaking with has no guarantee of
                quality games, users are essentially playing private games with
                each other, made by ESEA.
              </p>
              <p>
                I joined ESEA as a contractor in 2016, with redesigning the
                client as one of my first projects.
              </p>
              <a
                className="button button--secondary"
                href="http://theedwardbuffalo.com"
              >
                Visit Live Site
              </a>
            </div>
            <div className="project__role">
              <h2>My Roles</h2>
              <h3>UX Designer:</h3>
              <ul>
                <li>
                  Without any previous guidelines, I was given full creative
                  freedom to rebrand their beautiful hotel's digital presence.
                </li>
              </ul>
              <h3>Developer:</h3>
              <ul>
                <li>
                  After the consultation, we decided to forsake a CMS and opted
                  to use GatsbyJS for React's features, snappy load times, and
                  versatility.
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
            <div className="grid">
              <section>
                <h2>Initial Thoughts</h2>
                <p>
                  The major problem the client had with the current website was
                  that it did not look <strong>modern or professional</strong>{" "}
                  enough. This would naturally be solved in a redesign, as from
                  a design standpoint, it is the most straight forward problem
                  to solve. However:
                </p>

                <ul>
                  <li>
                    The concept of modernizing something seems very intrisical
                    to designers, but the perception of 'modern' can be
                    subjective. It's important to be aware of the target
                    audience, and also the client themselves, whom in this
                    specific scenario are well-versed in interior design and
                    architecture. To understand the client's idea of 'modern'
                    and 'professional', I asked them to show me examples of
                    other hotel websites that they thought fits this
                    description.
                  </li>
                  <li>
                    Because there weren't any branding guidelines to go off of,
                    the visual language of the new site would have to be built
                    entirely from scratch, which comes with both a lot of
                    creative freedom and new challenges, since the new branding
                    would have to properly reflect the hotel's historical,
                    luxurious feel while fulfilling the requirement of being
                    modern.
                  </li>
                  <li>
                    While invisible on the surface, Wix's sitebuilder can be
                    clunky, causing higher than optimal load times, which in
                    turn creates a more dated experience for users, as well as
                    some SEO issues. An upgrade in technology can certainly add
                    to the feeling of 'professional' and 'modern'.
                  </li>
                  <li>
                    Professionalism in visual design is almost always correlated
                    to proper use of basic design theory concepts, something the
                    original website was undoubtedly lacking.
                  </li>
                </ul>
              </section>
              <section>
                <h2>Challenges</h2>
                <ol>
                  <li>
                    Content is of course the most important part of an
                    informational website, and well-written copy is crucial in
                    building trust and communicating with users. The old copy
                    was very unprofessional and the language was inconsistent
                    across the board. To address this, I suggested bringing in a
                    professional content writer to help us revamp all the copy
                    on every page.
                  </li>
                  <li>
                    The new branding has to look modern in the digital space,
                    while maintaining some sort tie to the hotel's own signature
                    look in person. Fortunately, because the client had so many
                    high quality photos of the hotel, this was much easier to
                    accomplish.
                  </li>
                  <li>
                    Because the new website is so rich in photography, a
                    traditional static HTML and CSS site would not only be
                    difficult to build efficiently, but performance would be a
                    huge issue. To address this, I opted to use React,
                    specifically GatsbyJS, a static site generator, to take
                    advantage of image processing packages such as Sharp that
                    would help with performance and buildability. Addtiionally,
                    without a backend, security issues are no longer a concern.
                  </li>
                  <li>
                    The hotel uses an external booking software that syncs
                    calendars across other booking sites such as Expedia. This
                    is ultimately the biggest barrier, as we have no control
                    over the actual booking experience of the user. The best we
                    could do would be sending the user off to the third-party
                    site feeling satisfied and confident enough to successfully
                    book a room.
                  </li>
                </ol>
              </section>
            </div>
            <div className="grid">
              <section>
                <h2>Objectives</h2>
                <p>
                  Make the site feel more modern and professional. It sounds
                  simple, but there are many factors and layers to this goal.
                </p>
                <ol>
                  <li>
                    First and foremost: improve the usability, information
                    architecture, and navigation of the site. Nothing is more
                    unprofessional than a confusing user experience.
                  </li>
                  <li>
                    Second, improve the performance and SEO of the site to
                    increase user acquisition. Faster load times, meaningful
                    content, longer retention times, and semantic code all
                    contribute to a better performing site.
                  </li>
                  <li>
                    Third, make it easier to book a room, which is ultimately
                    the user conversion that the business wants.
                  </li>
                  <li>
                    Forth, utilize and showcase the hotel's beautiful photos
                    that were already available.
                  </li>
                  <li>
                    Last but not least, create a new visual language and
                    branding identity.
                  </li>
                </ol>
              </section>
              <section>
                <h2>Identifying Current Problems</h2>
                <div className="problems">
                  <div>
                    <ol>
                      <li>
                        The website does not show users anything about the
                        actual hotel before forcing them out to an external
                        website to book a room. Without a premediated goal of
                        booking a room at this specific hotel, users are
                        unlikely to convert.
                      </li>
                      <li>
                        The poor use of typography heavily contributes to the
                        perception of 'dated' and 'unprofessional'.
                      </li>
                      <li>
                        The poor use of color makes text unreadible, rendering
                        most of it useless.
                      </li>
                      <li>
                        There is not enough content for the pages that are
                        currently set up, creating the perception of them being
                        incomplete.
                      </li>
                      <li>
                        The poor use of photography not only wastes an abundance
                        of valuable assets, but contributes to the website
                        looking unprofessional.
                      </li>
                    </ol>
                  </div>
                </div>
              </section>
            </div>
            <section>
              <h2>Information Architecture</h2>
              <p>
                To order to properly plan out the new site, it was crucial to
                map out all the information that the site offers its users
                through a user flow map.
              </p>
              <img src={userflow} />
              <h3>Results</h3>
              <ul>
                <li>
                  The Explore page on the old site was essentially useless, so
                  it was removed completely and replaced with Gallery, a new
                  page displaying all the professional high quality photos of
                  the hotel.
                </li>
                <li>
                  The Contact Us page was changed into a component that exists
                  at the bottom of every page to ensure that users are able to
                  quickly send messages to the hotel.
                </li>
                <li>
                  While booking a room is the ultimate conversion, to ensure
                  that it would not fall through, users are provided with more
                  information around the rooms before being allowed to book. For
                  users who have premediated goals of booking, the Book Now
                  button remains at the top level navigation, which is fixed on
                  every page.
                </li>
                <li>
                  Private Events was condensed into a smaller component sitting
                  on the homepage, as it does not have enough content to warrant
                  its own page.
                </li>
              </ul>
            </section>
            <section>
              <h2>New Visual Design</h2>
              <img src={visuals} />
              <div className="grid">
                <div>
                  <h3>Logo</h3>
                  <p>
                    Because the budget did not allow for a new logo design (and
                    I am not a logo designer), I simply revamped it to appear
                    fit the new design style, changing the typeface to Avenir
                    Next Condensed, a more visually appealing and modern
                    apporach. I also changed the decorative line on the left to
                    the new primary gold color, giving it a nice accent. An
                    alternative horizontal logo was made for instances where the
                    responsiveness of the site makes the stacked logo too small
                    to view.
                  </p>
                </div>
                <div>
                  <h3>Typography</h3>
                  <p>
                    One of the Edward's most notable charactistics is that it
                    combines a historical, classic look with a modernized
                    approach to the hotel experience. To reflect this, I paired
                    Lora with Noto Sans—both Google Fonts, which improves
                    performance thanks to CDN caching. The elegant serifs in
                    Lora that is primarily used for contextual content, such as
                    paragraph texts and titles, showcases the hotel's timeless
                    classical design. For user-interactive content, such as
                    buttons, navigations, forms, and text fields, Noto Sans
                    provides a sleek modern touch, reflecting the hotel's modern
                    approach at how it handles bookings and check-in's.
                  </p>
                </div>
                <div>
                  <h3>Color</h3>
                  <p>
                    The new primary brand color is a sharp gold, slightly
                    different from the previous yellow, which reflects the
                    luxuriousness of the hotel when paired on black. This is
                    used sparingly throughout the site, for accents or
                    highlights and CTAs. The secondary colors are all subtle,
                    muted palettes found in the rooms of the actual hotel rooms.
                  </p>
                </div>
                <div>
                  <h3>Form</h3>
                  <p>
                    The new redesign uses geometric shapes with sharp edges to
                    create a sleek, modern, yet classic look that reflects the
                    visuals of the hotel. The overlaying shapes and elements not
                    only parallel the craftsmanship of the interior design, but
                    feels modern and professional in the digital space.
                  </p>
                </div>
              </div>
            </section>
            <section>
              <h2>New Features</h2>
              <h3>Find Room Component</h3>
              <p>
                One of the most prominent additions to the new website is the
                ability to find a room from the current webpage. Bookings are
                100% handled on an external third-party website, but previously
                users had to also find rooms on the third-party site as well.
                This new Find Rooms component allows users to do all the
                browsing on the hotel website before being sent off.
              </p>
              <img src={findRooms} />
              <p>
                This is technically possible because the room searching
                parameters are located in the URL of the third-party site. I was
                able to utilize AirBnb's calendar picker component to
                dynamically generate a link with the desired search parameters,
                ensuring that users stay on the main website for as long as
                possible. By default, the current dates are automatically
                populated via MomentJS.
              </p>
            </section>
            <h3>New Rooms Page</h3>
            <p>
              Perhaps the most important part of the new website is the rooms
              page, which sells the customer on the product—in this case, a
              hotel room. Prior to the redesign, the only way for the user to
              see the rooms that the hotel had to offer was through the
              third-party site. The issues that came with this were that the
              photos were low quality, not enticing, the amenities were
              inconsistent and inaccurate, and the information was difficult to
              control.
            </p>
            <img src={newRooms} />
            <p>
              I used the hotel's stunning visuals to draw attention to each room
              through a manual carousel, and added all the information on each
              room below. This way, we had full control over what the user could
              see before sending them off to the booking site, which is
              conveniently available in every room component.
            </p>
            <p>
              The component itself processes all the images through Sharp via a
              GraphQL query to fully optimize quality and size. I also took
              advanatage of lazy loading the images to increase the perception
              of speed. Images only load when they are called through the
              carousel—that is, unless all the currently fetched images are
              already loaded.
            </p>
            <p>
              Because there are so many hotel rooms and each room had at least 4
              very high quality images, this component made it possible to
              showcase them all without sacrificing too much performance.
            </p>
            <p>
              The rooms are ordered in descending order of what is most enticing
              visually and what is better for the hotel.
            </p>
            <h3>New Gallery Page</h3>
            <p>
              This page did not exist on the old site, but is crucial to the
              experience of the new redesign, which heavily focuses on visuals
              to draw in the customer. The client had an abundance of beautiful
              photos already taken, so I took full advantage of them by
              showcasing them all in a single location. The hotel itself prides
              itself in its modern renovations and beautiful interior design,
              and a gallery to showcase it brought the client a great sense of
              pride.
            </p>
            <img src={gallery} />
            <p>
              Because this page has even more photos than the Rooms page, Sharp
              was once again necessary to optimize the size and quality of the
              photos depending on where it was being loaded. I also utilized a
              lightbox plugin to allow users to browse through the photos in a
              slideshow style.
            </p>
            <h3>Home Page Portal</h3>
            <p>
              The previous homepage was essentially useless to the user—it
              provided no information, nor did it direct the user to any
              destination with information. In the redesign, I treated the
              homepage as a portal to the other main pages of the site, a normal
              convention for most sites.
            </p>
            <p>
              Although the top menu is visible at all times, I took advantage of
              the vibrant imagery to direct users to where they needed to go as
              an additional form of navigation.
            </p>
            <img src={portal} />
            <p>
              The copy for each block draws the users into wanting to learn more
              about the hotel, and the personalized call to action entices the
              users to click on what is already an attractive link.
            </p>
            <h3>Responsiveness</h3>
            <p>
              The old site was unviewable on mobile, which is simply not
              acceptable in the modern age. While the visuals were not as
              prominent in the mobile view, the primary actions of booking a
              room and exploring rooms were still the key features of the mobile
              site.
            </p>
            <img src={mobile} />
            <p>
              The entire nav menu transforms into the mobile menu via pure CSS,
              without any Javascript or React magic. Using CSS Grid and Flexbox,
              rearranging the content into a mobile view was seamless and easy.
            </p>

            <h2>Conclusion</h2>
            <p>
              The client fell in love with the redesign from the very first
              iteration. The new branding felt clean, sleek, modern, and
              professional, just as they had envisioned it. The user experience
              is straight forward and tailored around the user's discovery of
              all the information that the hotel had to offer.
            </p>
            <p>
              The Rooms page is the client's favorite part of the site, as it
              perfectly solved the problem they had with the previous site in
              that it did not properly showcase what the hotel had to offer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
