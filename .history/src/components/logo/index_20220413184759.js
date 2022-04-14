import * as React from "react";

import { Link } from "gatsby";

import logo from "../../images/logo.svg";

import "./style.scss";

const Logo = () => {
  return (
    <Link className="logo" to="">
      <img src={logo} alt="David Le Logo" />
    </Link>
  );
};

export default Logo;
