import * as React from 'react';

import { Button } from '../..';

import './style.scss';

function getRoles(roles) {
  switch (roles) {
    case 'UI Design':
      return 'ui-design';
    case 'UX Design':
      return 'ux-design';
    case 'Product Design':
      return 'product-design';
    case 'Visual Design':
      return 'visual-design';
    case 'Front-end Development':
      return 'fe-dev';
    case 'Content Writing':
      return 'content';
    default:
      return 'Contribution';
  }
}

const ProjectCard = (props) => {
  return (
    <div className={`project-card`}>
      <div className="project-card__image">
        <img src={props.image} alt={`project ${props.image}`} />
      </div>
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
        <a className="button button--secondary" href={props.to}>
          See More
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
