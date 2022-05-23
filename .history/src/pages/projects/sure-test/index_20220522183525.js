import * as React from "react";
import { Logo } from "../../../components";
import "./style.scss";

import { Helmet } from "react-helmet";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

import hero from "../../../images/projects/sure-test/hero.png";
import userflow from "../../../images/projects/sure-test/user-flow.png";

import home from "../../../images/projects/sure-test/home.png";
import meeting from "../../../images/projects/sure-test/meeting.png";
import calendar from "../../../images/projects/sure-test/calendar.png";
import profile from "../../../images/projects/sure-test/profile.png";

import "../../../styles/main.scss";

const SECOND_IMAGE = {
  imageUrl: "images/projects/edward/hero.png",
};
// markup
const ProjectPage = () => {
  return (
    <div className="edward">
      <Helmet title="Sure Test - David Le's Portfolio" />
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
              <div className="project__company">Interview Test</div>
              <h1>Sure</h1>
            </div>
          </div>
          <div className="project__info">
            <div className="project__overview">
              <h2>Overview</h2>
              <p>
                Design a product that helps remote teams and clients across time
                zones schedule their meetings and capture relevant notes and
                action items.
              </p>
              <a
                className="button button--secondary"
                href="http://theedwardbuffalo.com"
              >
                View Prototype
              </a>
            </div>
            <div className="project__role">
              <h2>Instructions</h2>
              <ul>
                <li>
                  Typical use cases may include: scheduling a daily standup for
                  a team with remote offices around the globe; scheduling calls
                  with both internal and external participants located in
                  different regions.
                </li>
                <li>The time limit of this exercise is 5 hours.</li>
                <li>
                  Think about users, business goals, form, and other
                  constraints.
                </li>
              </ul>
            </div>
          </div>
          <div className="project__body">
            <section>
              <h2>Final Product</h2>
              <img src={home} />
              <img src={meeting} />
              <img src={calendar} />
              <img src={profile} />
            </section>
            <div className="grid">
              <section>
                <h2>Initial Thoughts</h2>
                <p>
                  Because the project is timeboxed for 5 hours, it’s important
                  for me to properly distribute my time into each design phase.
                </p>
                <ol>
                  <li>Research</li>
                  <li>Wireframes and low fidelity mockups</li>
                  <li>High fidelity mockups</li>
                  <li>Prototyping</li>
                  <li>User testing</li>
                </ol>
                <p>
                  Many tools already exist to help with remote teams, so there
                  is no need to completely reinvent the wheel. For example, the
                  product should not include a chat system to replace Slack, but
                  instead integrate into it. Likewise, it should link into Zoom
                  for meetings instead of trying to have video conferencing and
                  screen sharing built-in.
                </p>
              </section>
              <section>
                <h2>Initial Research</h2>
                <p>
                  Working remotely has its benefits, but also comes with quite a
                  few challenges.
                </p>
                <ul>
                  <li>Team members are in different time zones.</li>
                  <li>
                    Communication can be difficult via text as opposed to
                    face-to-face.
                  </li>
                  <li>
                    In larger teams, it is easy for employees to feel lost.
                  </li>
                  <li>
                    With distractions at home, time management becomes crucial.
                  </li>
                  <li>
                    On the opposite end, employees may find themselves
                    constantly working.
                  </li>
                  <li>
                    Stand-ups and ceremonies are more difficult to manage
                    efficiently.
                  </li>
                </ul>
                <p>
                  Quite a few productivity tools exist to solve these problems,
                  and with the brief research, I focused on the two following
                  products:
                </p>
                <ul>
                  <li>
                    Friday.app: A full product that helps track team progress
                    and productivity.
                  </li>
                  <li>
                    Team O'Clock: A slack plug-in that helps with team
                    ceremonies such as standups.
                  </li>
                </ul>
              </section>
            </div>
            <div className="grid">
              <section>
                <h2>Objectives</h2>
                <p>
                  I decided that although it is slightly out of the scope of the
                  requirements, my final product should solve the following
                  problems:
                </p>
                <ol>
                  <li>
                    The product should include a shared calendar to help teams
                    in different timezones synchronize their meetings.
                  </li>
                  <li>
                    The product should aid with stand-ups and other scrum
                    ceremonies.
                  </li>
                  <li>
                    The product should integrate with Zoom or another video chat
                    platform.
                  </li>
                  <li>
                    The product should have an organization feature to help with
                    time management.
                  </li>
                  <li>The product should also include a reminder feature.</li>
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
              <h2>User Flow</h2>
              <p>
                Based on the objectives created in the initial planning stage, I
                decided that the product would include four major
                features/pages: a home dashboard, a team calendar, a meeting
                instance, and user profile pages.
              </p>
              <img src={userflow} />
              <ul>
                <li>
                  Home Dasboard: The homepage would act as the main dashboard or
                  portal to the other features of the product, while housing one
                  of the most important features: the team feed. This feed
                  should allow for quick communication between team members,
                  encompassing both important daily ceremonies such as stand-up,
                  weekly retros, monthly check-ins and goals, as well as fun
                  casual conversations and icebreakers.
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
