import * as React from "react";
import { ProjectCard } from "../../components";

import "./style.scss";

const projects = [
  {
    name: "This Website",
    description:
      "Lead the development of Currency, M&T’s official design system used to provide design and engineering consistency across entire bank.",
    roles: [
      "UI Design",
      "UX Design",
      "Visual Design",
      "Front-end Development",
      "Content Writing",
    ],
    image: {},
  },
  {
    name: "Currency Design System",
    description:
      "Lead the development of Currency, M&T’s official design system used to provide design and engineering consistency across entire bank.",
    roles: ["UI Design", "Visual Design", "Front-end Development"],
    image: "../../../currency.png",
  },
  {
    name: "ESEA Game Client",
    description:
      "Lead the development of Currency, M&T’s official design system used to provide design and engineering consistency across entire bank.",
    roles: [
      "UI Design",
      "UX Design",
      "Product Design",
      "Visual Design",
      "Front-end Development",
    ],
    image: {},
  },
  {
    name: "ESEA Landing Page",
    description:
      "Lead the development of Currency, M&T’s official design system used to provide design and engineering consistency across entire bank.",
    roles: ["UX Design", "Visual Design", "Front-end Development"],
    image: {},
  },
  {
    name: "ESEA Homepage",
    description:
      "Lead the development of Currency, M&T’s official design system used to provide design and engineering consistency across entire bank.",
    roles: ["UI Design", "Front-end Development"],
    image: {},
  },
  {
    name: "CSGOStats",
    description:
      "Lead the development of Currency, M&T’s official design system used to provide design and engineering consistency across entire bank.",
    roles: ["UI Design", "Front-end Development"],
    image: {},
  },
  {
    name: "Cloud ID Developer Portal",
    description:
      "Lead the development of Currency, M&T’s official design system used to provide design and engineering consistency across entire bank.",
    roles: ["UI Design", "Front-end Development"],
    image: {},
  },
  {
    name: "Cloud ID Bridge Test Tool",
    description:
      "Lead the development of Currency, M&T’s official design system used to provide design and engineering consistency across entire bank.",
    roles: ["UI Design", "Front-end Development"],
    image: {},
  },
  {
    name: "LuxeApp",
    description:
      "Lead the development of Currency, M&T’s official design system used to provide design and engineering consistency across entire bank.",
    roles: ["UI Design", "Front-end Development"],
    image: {},
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container portfolio__container">
        <h2>What I've Worked On</h2>
        <div className="portfolio__projects">
          {projects.map((project) => (
            <ProjectCard
              name={project.name}
              description={project.description}
              roles={project.roles}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
