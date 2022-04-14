import * as React from "react"
import { JobCard } from "../../components"

import './style.scss'

import 'mt' from '../../images/logos/mt.png'

const jobs = [
  {
    "type": "Full-Time",
    "title": "UX Engineer II, AVP",
    "time": "Nov 2018 — present",
    "logo": "mt"
  },
]

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="container timeline__container">
        <h2>Who I've Worked With</h2>
        <div className="timeline__jobs">
          {jobs.map(job => <JobCard type={job.type} logo={job.logo} title={job.title} time={job.time}/>)}
        </div>
      </div>
    </div>
  )
}

export default Timeline
