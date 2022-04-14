import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

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
    </div>
  );
};

export default ProjectCard;
