import * as React from "react";

import "./style.scss";

import { Logo, Nav } from "../../components";

class Header extends React.Component {
  state = {
    sticky: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > 108) {
      if (!this.state.sticky) {
        this.setState({ sticky: true });
      }
    } else {
      if (this.state.sticky) {
        this.setState({ sticky: false });
      }
    }
  };

  render() {
    return (
      <header className={`header ${this.state.sticky && "header--sticky"}`}>
        <div className="header__container">
          <title>David Le Portfolio</title>
          <Logo />
          <Nav />
        </div>
      </header>
    );
  }
}

export default Header;
