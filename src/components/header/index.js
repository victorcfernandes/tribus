import React from "react";
import { Link } from "gatsby";
import "./styles/header.scss";

import Navigation from "./Navigation";

import throttle from "../../helpers/throttle";

import logo from "../../img/logo-tribus2.png";
import smallLogo from "../../img/logo-tribus3.png";

class Header extends React.Component {
  state = {
    solidHeader: false
  };

  componentDidMount() {
    window.addEventListener("scroll", throttle(this.handleScroll, 100, this));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", throttle(this.handleScroll, 100, this));
  }

  handleScroll() {
    const headerShouldBeSolid = window.scrollY > 40;
    this.setState({ solidHeader: headerShouldBeSolid });
  }

  render() {
    return (
      <header className={`header ${this.state.solidHeader ? "header--solid" : ""}`}>
        <div className="header__container">
          <div className="header__logo">
            <Link to="/" title="Logo">
              <img
                src={this.state.solidHeader ? smallLogo : logo}
                alt="Logo Tribus"
                style={this.state.solidHeader ? { width: "41px" } : { width: "67px" }}
              />
            </Link>
          </div>
          <Navigation />
        </div>
      </header>
    );
  }
}

export default Header;
