import * as React from 'react';

import './style.scss'

import mira from '../../images/mira.png'

const funfacts = [
  {
    "category": "Education",
    "info": "SUNY University at Buffalo",
  },
  {
    "category": "Specialization",
    "info": "SCSS, HTML, Javascript, React",
  },
  {
    "category": "Tools of Choice",
    "info": "Sketch, Figma, GatsbyJS, Gulp, Webpack",
  },
  {
    "category": "Interests",
    "info": "Singing, Writing, Acting, Drawing, Chess",
  },
]

const JobCard = (props) => {
  return (
  <div className="job-card">
    <div className="job-card__header"></div>
  </div>
  )
}

export default JobCard
