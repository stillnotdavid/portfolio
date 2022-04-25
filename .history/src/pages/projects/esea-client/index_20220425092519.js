import * as React from "react";
import { Logo } from "../../../components";
import "./style.scss";
import { useStaticQuery, graphql } from "gatsby";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

import status from "../../../images/projects/esea-client/status.png";
import after from "../../../images/projects/esea-client/02.png";
import hero from "../../../images/projects/esea-client/hero.png";
import buddyList from "../../../images/projects/esea-client/buddy-list.png";
import achievements from "../../../images/projects/esea-client/unlock.png";
import lobby from "../../../images/projects/esea-client/lobby.png";
import lobbySettings from "../../../images/projects/esea-client/lobby-settings.png";

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
                client as one of my first projects. Since then, I am still in
                charge of the design of all feature updates and skins.
              </p>
            </div>
            <div className="project__role">
              <h2>My Roles</h2>
              <h3>UX Designer:</h3>
              <ul>
                <li>
                  I worked with the product team to redesign the client, setting
                  up user interviews, research, prototyping, and designing the
                  new UI and visual language that has seen then been embraced by
                  other parts of the brand.
                </li>
              </ul>
              <h3>UI Developer:</h3>
              <ul>
                <li>
                  While ESEA has a large team of talented engineers, I was asked
                  to take upon the task of styling the front-end to ensure that
                  it was as close to the designs as possible.
                </li>
              </ul>
            </div>
          </div>
          <div className="project__body">
            <section className="before-after">
              <h2>Before &amp; After</h2>
              <SimpleReactLightbox>
                <SRLWrapper>
                  <img
                    className="before-after__image"
                    src="https://anoutstandingbalance.files.wordpress.com/2016/03/ss2016-03-11at10-43-53.png"
                  />
                  <img className="before-after__image" src={after} />
                </SRLWrapper>
              </SimpleReactLightbox>
            </section>

            <section>
              <h2>Initial Thoughts</h2>
              <p>
                ESEA is well-known in the Counter-Strike gaming community, as
                most players have either played or heard of it. Surprisingly, it
                has been able to stay prominent in the competitive scene with
                such an outdated client.
              </p>
              <ul>
                <li>
                  In order to properly redesign this app, it was crucial to
                  understand the product goals as well as the users themselves.
                  Unlike a website, this was a client that users would be
                  interacting with daily.
                </li>
                <li>
                  The UX of video games is different from the web, therefore
                  it's important to research UI patterns that pre-exist in
                  Counter-Strike and similar games.
                </li>
                <li>
                  Ultimately the client is still a web app, so it should still
                  behave and function the way a web application does.
                </li>
              </ul>
            </section>

            <div className="grid">
              <section>
                <h2>Objectives</h2>
                <ol>
                  <li>
                    Improve the overall user experience of the client through a
                    redesign, taking advantage of newer technology.
                  </li>
                  <li>
                    Redesign the visual language and branding of the product.
                  </li>
                  <li>
                    Design the new UI around the concept of themeable skins that
                    are awarded out to players and/or sponsored products.
                  </li>
                </ol>
              </section>
              <section>
                <h2>Challenges</h2>
                <ol>
                  <li>
                    Since I was not a Counter-Strike player, it was really
                    difficult for me to understand a lot of features in the app.
                    I spent a lot of time researching and consulting with the
                    product team to fully grasp the usage of the app.
                  </li>
                  <li>
                    Counter-Strike's design language leans towards skeumorphism,
                    which is difficult to replicate on the web. Likewise, it
                    could look outdated if not done properly.
                  </li>
                  <li>
                    I didn't fully understand what was technically possible and
                    what was not, since I was not familiar with the backend
                    capabilities of the client.
                  </li>
                  <li>
                    Because ESEA is a unique product, there was nothing to base
                    the new design off of, such as competitors or standard
                    conventions.
                  </li>
                  <li>
                    The client has been used for so many years that straying too
                    far away from its original functionality will cause a lot of
                    confusion to old players.
                  </li>
                </ol>
              </section>
            </div>
            <section>
              <h2>The New Home Screen</h2>
            </section>
            <section>
              <h2>The New Lobby Screen</h2>
              <p>
                The game lobby is where users will be spending most of their
                time, so making it as intuitive as possible, while keeping the
                majority of the old expereince was crucial in the redesign.
              </p>
              <img src={lobby} />
              <p>
                Depending on its context, each setting was presented in a
                different way.
              </p>
              <img src={lobbySettings} />
            </section>
            <section>
              <h2>New Features</h2>
              <h3>Away Status</h3>
              <p>
                An important peace of information in any game is a player's away
                status. It's useful to know if a player is idle or away from
                their keyboard, so that they are not invited to a party or
                lobby. The green, orange, and red colors are a convention used
                by almost every chat platform denoting Available, Away, and
                Busy. Because these colors have instrisic meaning, they cannot
                be overrided by a skin.
              </p>
              <img src={status} />
              <p>
                I experimented with a few fun aways to display and animate the
                options of getting the status.
              </p>
              <h3>New Buddy List</h3>
              <p>
                Since player status was now available, each buddy now has a
                status bubble on their avatar (which is pulled from their site
                profile). On top of idle status, behavioral status is also a new
                bit of information that is available, as the client is able to
                track the player's game status, displaying whether or not they
                are playing actively Counter-Strike, presently inside of an ESEA
                lobby, or simply available at their computer.
              </p>
              <img src={buddyList} />
              <p>
                I also experimented with two variations of the buddy list, one
                in which Online and Offline players are grouped seperately.
              </p>
              <h3>Achievements</h3>
              <p>
                The concept of achievements is nothing new to video
                games—players get rewarded for completing a task. Although the
                client itself is not a video game, we brought this reward system
                to gamify the experience, allowing users to receive rewards such
                as skins for ranking up.
              </p>
              <img src={achievements} />
              <p>
                This is technically possible because the client's backend is
                connected to the website, allowing for users to receive items or
                awards through posting, ranking up, and participating in events.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
