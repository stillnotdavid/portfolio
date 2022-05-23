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
import calendar2 from "../../../images/projects/sure-test/calendar2.png";
import profile from "../../../images/projects/sure-test/profile.png";

import wire01 from "../../../images/projects/sure-test/wire1.png";
import wire02 from "../../../images/projects/sure-test/wire2.png";
import wire03 from "../../../images/projects/sure-test/wire3.png";
import wire04 from "../../../images/projects/sure-test/wire4.png";
import wire05 from "../../../images/projects/sure-test/wire5.png";

import header from "../../../images/projects/sure-test/header.png";

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
              {/* <a
                className="button button--secondary"
                href="http://theedwardbuffalo.com"
              >
                View Prototype
              </a> */}
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

            <section>
              <h2>Objectives</h2>
              <p>
                I decided that although it is slightly out of the scope of the
                requirements, my final product should solve the following
                problems:
              </p>
              <ol>
                <li>
                  The product should include a shared calendar to help teams in
                  different timezones synchronize their meetings.
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
                  <strong>Home Dasboard:</strong> The homepage would act as the
                  main dashboard or portal to the other features of the product,
                  while housing one of the most important features: the team
                  feed. This feed should allow for quick communication between
                  team members, encompassing both important daily ceremonies
                  such as stand-up, weekly retros, monthly check-ins and goals,
                  as well as fun casual conversations and icebreakers.
                </li>
                <li>
                  <strong>Team Calendar:</strong> The calendar page should allow
                  users to schedule meetings with team members while keeping in
                  mind their timezones and individual schedules.
                </li>
                <li>
                  <strong>Meeting Instances:</strong> Meeting instance pages
                  should be dynamic based on the type of meetings, but is meant
                  to allow for efficient meetings, such as timed cycled
                  speaking, meeting notes and action items, as well as
                  individual notetaking.
                </li>
                <li>
                  <strong>User Profile:</strong> Each employee should have their
                  own user profiles which displays basic information as well as
                  fun icebreakers and personal feeds.
                </li>
              </ul>
            </section>
            <section>
              <h2>Wireframes and Low Fidelity Mockups</h2>
              <div className="grid">
                <img src={wire01} />
                <img src={wire02} />
                <img src={wire03} />
                <img src={wire04} />
              </div>
              <img src={wire05} />
            </section>
            <section>
              <h2>
                Objective 1: The product should include a shared calendar to
                help teams in different timezones synchronize their meetings.
              </h2>
              <img src={calendar2} />
              <p>
                The team calendar page allows all members across a team to share
                a single calendar.
              </p>
            </section>
            <section>
              <h2>
                Objectives 2 &amp; 3: The product should aid with stand-ups and
                other scrum ceremonies and integrate with Zoom or another video
                chat platform.
              </h2>
              <img src={meeting} />
              <p>
                A timed stand-up carousel that randomly selects and orders
                members allows for quick and efficient standups. All meetings
                also include a Meeting Notes feature that records all action
                items or team thoughts, as well as a personal notes section.
                These notes should be reviewable even after the meeting is over.
              </p>
              <p>
                Because the product is not meant to replace Zoom, a link to the
                actual Zoom (or Webex, Slack, etc) meeting is available.
              </p>
            </section>
            <section>
              <h2>
                Objectives 4 &amp; 5: The product should have an organization
                feature to help with time management and also include a reminder
                feature.
              </h2>
              <img src={home} />
              <p>
                Working remotely can make it difficult to track productivity
                with all the ongoing distractions, so the homepage should
                include utitilies that aid with time management.
              </p>
              <p>
                The Team Feed can also help with communication and team bonding.
              </p>
            </section>
            <section>
              <h2>Component: Header</h2>
              <img src={header} />
              <p>
                The header is pretty conventional, it includes a logo,
                navigational links, and a user settings panel.
              </p>
              <p>
                It also includes a notification component that helps users keep
                track of their daily tasks.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
