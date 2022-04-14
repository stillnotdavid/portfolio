import * as React from "react";

import { Button } from "../../components";
import "animate.css";

import currency from "../../images/projects/currency.png";

import "./style.scss";

const ProjectCard = (props) => {
  return (
    <div className={`project-card`}>
      <div className="project-card__header">
        <div className="project-card__roles">
          <div className="project-card__role">UI Design</div>{" "}
          <div className="project-card__role">Front-end Development</div>
        </div>
      </div>
      <div className="project-card__body">
        <img className="project-card__image" src={currency} />
        <h3 className="project-card__name">{props.name}</h3>
        <p className="project-card__description">{props.description}</p>
        <div className="project-card__footer">
          <Button text="Learn More" name="secondary" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
