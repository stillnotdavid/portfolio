import * as React from "react";

import { Button } from "../../components";
import "animate.css";

import "./style.scss";

const ProjectCard = (props) => {
  return (
    <div className={`project-card`}>
      <div className="project-card__header">
        <div className="project-card__roles">
          <div className="project-card__role">UI Design</div>
        </div>
      </div>
      <div className="project-card__footer">
        <Button text="Learn More" />
      </div>
    </div>
  );
};

export default ProjectCard;
