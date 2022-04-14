import * as React from "react";

import { Link, animateScroll as scroll } from "react-scroll";

import "./style.scss";

const links = [
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Resume",
    url: "/resume",
  },
  {
    name: "Portfolio",
    url: "/portfolio",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__links">
        {links.map((link) => (
          <li className="nav__item">
            <Link
              className="nav__link"
              activeClass="nav__link--active"
              to={link.url}
              spy
              smooth
              //offset="-83"
              duration="400"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
