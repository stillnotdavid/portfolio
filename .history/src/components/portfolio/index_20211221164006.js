import * as React from "react"
import {
  JobCard
} from "../../components"

import './style.scss'

const jobs = [{
    "type": "Full-Time",
    "title": "UX Engineer II, AVP",
    "time": "Nov 2018 — present",
    "logo": "../../mt.png",
    "name": "mt",
    "current": true
  },
  {
    "type": "Contractor",
    "title": "UI Designer",
    "time": "Apr 2017 — present",
    "logo": "../../esl.png",
    "name": "esl",
    "current": true
  },
  {
    "type": "Freelancer",
    "title": "Front-end Developer",
    "time": "Nov 2018 — present",
    "logo": "../../cw.png",
    "name": "cw",
    "current": true
  },
  {
    "type": "Full-Time",
    "title": "Senior UX Designer",
    "time": "Jul 2015 — Nov 2018",
    "logo": "../../sync.png",
    "name": "sync",
    "current": false
  },
  {
    "type": "Full-Time",
    "title": "Digital Media Designer",
    "time": "Jan 2013 — Jul 2015",
    "logo": "../../ub.png",
    "name": "ub",
    "current": false
  },
]

const Portfolio = () => {
    return ( <section className="portfolio" id="#portfolio">
      <div className="container portfolio__container">
        <h2>What I've Worked On</h2>
        <div className="portfolio__projects">
          
        </div>
      </div>
    </section>
    )
  }

export default Portfolio
