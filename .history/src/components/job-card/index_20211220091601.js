import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faChevronCircleDown
} from '@fortawesome/free-solid-svg-icons'

import 'animate.css'

import './style.scss'

const JobCard = (props) => {
  return (
  <div className={`job-card job-card--${props.name}`}>
    <div className="job-card__header"><span className="job-card__current"></span> {props.type}</div>
    <div className="job-card__body">
      <div className="job-card__logo">
        <img src={props.logo} alt="Logo" />
      </div>
      <div className="job-card__title">{props.title}</div>
      <div className="job-card__time">{props.time}</div>
      <FontAwesomeIcon icon={faChevronCircleDown} size="2x" className="job-card__more"/>
    </div>
  </div>
  )
}

export default JobCard
