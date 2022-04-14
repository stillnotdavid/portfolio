import * as React from "react";

import { Button } from "../../components";
import "animate.css";

import "./style.scss";

function getRoles(roles) {
  switch (roles) {
    case "UI Design":
      return "ui-design";
    case "UX Design":
      return "ux-design";
    case "Product Design":
      return "product-design";
    case "Visual Design":
      return "visual-design";
    case "Front-end Development":
      return "fe-dev";
    case "Content Writing":
      return "content";
  }
}

const ProjectCard = (props) => {
  return (
    <div className={`project-card`}>
      <img className="project-card__image" src={props.image} />
      <div className="project-card__roles">
        {props.roles.map((role) => (
          <div
            className={`project-card__role project-card__role--${getRoles(
              role
            )}`}
          >
            {role}
          </div>
        ))}
      </div>
      <h3 className="project-card__name">{props.name}</h3>
      <p className="project-card__description">{props.description}</p>

      <div className="project-card__footer">
        <Button text="Learn More" name="secondary" />
      </div>
    </div>
  );
};

export default ProjectCard;
