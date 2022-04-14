import * as React from 'react';

import './style.scss'

import mira from '../../images/mira.png'
import { propTypes } from 'gatsby-plugin-image/dist/src/components/gatsby-image.server';

const links = [
  {
    "name": "About",
    "url": "/",
    "active": true
  },
  {
    "name": "Resume",
    "url": "/"
  },
  {
    "name": "Portfolio",
    "url": "/"
  },
  {
    "name": "Contact",
    "url": "/"
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
        <div className="profile-card__header-name">{prop.name}</div>
        <div className="profile-card__header-location">{prop.location}</div>
      </div>
    </div>
  </div>
  )
}

export default ProfileCard
