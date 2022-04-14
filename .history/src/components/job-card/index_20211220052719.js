import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.scss'

import mt from '../../images/logos/mt.png'

const jobs = [
  {
    "type": "Full-Time",
    "title": "UX Engineer II, AVP",
    "time": "Nov 2018 — present"
  },
]

const JobCard = (props) => {
  return (
  <div className="job-card">
    <div className="job-card__header">Full-Time</div>
    <div className="job-card__body">
      <div className="job-card__logo">
        <img src={mt} alt="M&T Logo" />
      </div>
      <div className="job-card__title">UX Engineer</div>
      <div className="job-card__time">Nov 2018 — present</div>
    </div>
  </div>
  )
}

export default JobCard
