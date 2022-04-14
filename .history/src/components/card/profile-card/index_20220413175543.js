import * as React from "react";

import "./style.scss";

import me from "../../../images/me2.jpg";

class ProfileCard extends React.Component {
  state = {
    switchOn: true,
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
            <img src={me} />
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
          {this.props.facts.map((facts) => (
            <div className="profile-card__body-facts">
              <div className="profile-card__body-category">
                {facts.category}
              </div>
              <div className="profile-card__body-info">
                {this.state.switchOn ? facts.info : facts.longInfo}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProfileCard;
