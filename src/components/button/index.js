import * as React from "react";

import { Link, animateScroll as scroll } from "react-scroll";

import "./style.scss";

const Button = (props) => {
  return (
    <Link
      className={`button button--${props.name}`}
      to={props.to}
      spy={props.spy}
      smooth={props.smooth}
      offset={props.offset}
      duration={props.duration}
    >
      {props.text}
    </Link>
  );
};

export default Button;
