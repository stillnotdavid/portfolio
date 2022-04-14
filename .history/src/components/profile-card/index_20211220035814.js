import * as React from 'react';

import './style.scss'

import mira from '../../images/mira.png'

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

const ProfileCard = () => {
  return (
  <div className="profile-card">
    <div className="profile-card__header">
      <div class="profile-card__header-image">
        <img src={mira} />
      </div>
    </div>
  </div>
  )
}

export default ProfileCard
