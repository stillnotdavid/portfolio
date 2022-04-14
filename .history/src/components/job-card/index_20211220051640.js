import * as React from 'react';

import './style.scss'

import mira from '../../images/mira.png'

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
      <div className="job-card__title">UX Engineer</div>
    </div>
  </div>
  )
}

export default JobCard
