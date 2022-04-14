import * as React from "react";

import { Link, animateScroll as scroll } from "react-scroll";

import "./style.scss";

const Button = (props) => {
  return (
    <Link
      className={`button button--${props.name}`}
      href={props.to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={400}
    >
      >{props.text}
    </Link>
  );
};

export default Button;
