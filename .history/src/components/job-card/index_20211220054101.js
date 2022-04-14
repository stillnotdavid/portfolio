import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faChevronCircleDown
} from '@fortawesome/free-solid-svg-icons'

import './style.scss'

import mt from '../../images/logos/mt.png'

const JobCard = (props) => {
  return (
  <div className="job-card">
    <div className="job-card__header">{props.type}</div>
    <div className="job-card__body">
      <div className="job-card__logo">
        <img src={require(`${props.logo}`)} alt="Logo" />
      </div>
      <div className="job-card__title">{props.title}</div>
      <div className="job-card__time">{props.time}</div>
      <FontAwesomeIcon icon={faChevronCircleDown} size="2x" className="job-card__more"/>
    </div>
  </div>
  )
}

export default JobCard
