import * as React from "react";
import { ProjectCard } from "../../components";

import "./style.scss";

import currency from "../../images/projects/currency.png";

const projects = [
  {
    name: "Currency Design System",
    description:
      "Lead the development of Currency, M&T’s official design system used to provide design and engineering consistency across entire bank.",
    roles: ["UI Design", "Front-end Development"],
    image: { currency },
  },
  {
    name: "Currency Design System",
    description:
      "Lead the development of Currency, M&T’s official design system used to provide design and engineering consistency across entire bank.",
    roles: ["UI Design", "UX Design", "Front-end Development"],
    image: {},
  },
  {
    name: "Currency Design System",
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
              image={currency}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
