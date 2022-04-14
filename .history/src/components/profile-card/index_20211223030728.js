import * as React from "react";

import "./style.scss";

import mira from "../../images/mira2.png";

const funfacts = [
  {
    category: "Education",
    info: "SUNY University at Buffalo",
  },
  {
    category: "Specialization",
    info: "SCSS, HTML, Javascript, React",
  },
  {
    category: "Tools of Choice",
    info: "Sketch, Figma, GatsbyJS, Gulp, Webpack",
  },
  {
    category: "Interests",
    info: "Singing, Writing, Acting, Drawing, Chess",
  },
];

class ProfileCard extends React.Component {
  state = {
    switchOn: false,
  };

  toggleSwitch() {
    this.setState({
      switchOn: !prevState.switchOn,
    });
  }

  render() {
    return (
      <div className="profile-card">
        <div className="profile-card__header">
          <div class="profile-card__header-image">
            <img src={mira} />
          </div>
          <div className="profile-card__header-info">
            <div className="profile-card__header-name">{this.props.name}</div>
            <div className="profile-card__header-location">
              {this.props.location}
            </div>
          </div>
        </div>
        <div className="profile-card__body">
          <div className="profile-card__tldr">
            TL;DR{" "}
            <div class="profile-card__switch">
              <div
                className="profile-card__switch-toggle"
                onClick={this.toggleSwitch()}
              ></div>
            </div>
          </div>
          {funfacts.map((facts) => (
            <div className="profile-card__body-facts">
              <div className="profile-card__body-category">
                {facts.category}
              </div>
              <div className="profile-card__body-info">{facts.info}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProfileCard;
