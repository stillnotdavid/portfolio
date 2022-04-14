import * as React from 'react';

import './style.scss'

import mira from '../../images/mira2.png'

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

const ProfileCard = (props) => {
  return (
  <div className="profile-card">
    <div className="profile-card__header">
      <div class="profile-card__header-image">
        <img src={mira} />
      </div>
      <div className="profile-card__header-info">
        <div className="profile-card__header-name">{props.name}</div>
        <div className="profile-card__header-location">{props.location}</div>
      </div>
    </div>
    <div className="profile-card__body">
      {funfacts.map( facts => (
      <div className="profile-card__body-facts">
        <div className="profile-card__body-category">{facts.category}</div>
        <div className="profile-card__body-info">{facts.info}</div>
      </div>))}
    </div>
  </div>
  )
}

export default ProfileCard
