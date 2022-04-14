import * as React from "react";

import "./style.scss";

import mira from "../../images/mira2.png";

const funfacts = [
  {
    category: "Education",
    info: "SUNY University at Buffalo",
    longInfo: "Test",
  },
  {
    category: "Specialization",
    info: "SCSS, HTML, Javascript, React",
    longInfo: "Test",
  },
  {
    category: "Tools of Choice",
    info: "Sketch, Figma, GatsbyJS, Gulp, Webpack",
    longInfo: "Test",
  },
  {
    category: "Interests",
    info: "Singing, Writing, Acting, Drawing, Chess",
    longInfo: "Test",
  },
];

class ProfileCard extends React.Component {
  state = {
    switchOn: false,
  };

  toggleSwitch = () => {
    this.setState((prevState) => ({
      switchOn: !prevState.switchOn,
    }));
  };

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
            <div
              className={`profile-card__switch ${
                this.state.switchOn && "profile-card__switch--on"
              }`}
              onClick={this.toggleSwitch}
            >
              <div className="profile-card__switch-toggle"></div>
            </div>
          </div>
          {funfacts.map((facts) => (
            <div className="profile-card__body-facts">
              <div className="profile-card__body-category">
                {facts.category}
              </div>
              {this.state.switchOn && (
                <div className="profile-card__body-info">{facts.info}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProfileCard;
