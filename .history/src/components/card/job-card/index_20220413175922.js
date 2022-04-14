import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

import "animate.css";

import "./style.scss";

class JobCard extends React.Component {
  state = {
    open: false,
  };

  openCard = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  };
  render() {
    return (
      <div
        onClick={this.openCard}
        className={`job-card job-card--${this.props.name} ${
          this.state.open && "job-card--open"
        }`}
      >
        <div className="job-card__header">
          {this.props.current && <span className="job-card__current"></span>}{" "}
          {this.props.type}
        </div>
        <div className="job-card__body">
          <div className="job-card__logo">
            <img src={this.props.logo} alt="Logo" />
          </div>
          <div className="job-card__title">{this.props.title}</div>
          <div className="job-card__time">{this.props.time}</div>
          {this.state.open && (
            <p className={`job-card__more`}>{this.props.more}</p>
          )}
          {/* <p
            className={`job-card__more ${
              this.state.open && "job-card__more--show"
            }`}
          >
            {this.props.more}
          </p> */}
          {/* <div className="job-card__footer">
            <FontAwesomeIcon
              icon={faChevronCircleDown}
              size="2x"
              className="job-card__icon"
            />
          </div> */}
        </div>
      </div>
    );
  }
}

export default JobCard;
