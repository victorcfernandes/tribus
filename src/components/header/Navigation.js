import React from "react";

import "./styles/navigation.scss";

import NavItem from "./NavItem";

import logo from "../../img/logo-tribus2.png";

import { navigation } from "./navigation.json";

class Navigation extends React.Component {
  state = {
    openedNavigation: false
  };

  toggleNavigation() {
    this.setState({ openedNavigation: !this.state.openedNavigation });
  }

  render() {
    return (
      <nav className="navigation">
        <button
          onClick={() => this.toggleNavigation()}
          className={`navigation__icon ${
            this.state.openedNavigation ? "navigation__icon--close" : ""
          }`}>
          <span className="navigation__icon-span" />
        </button>
        <ul
          className={`navigation__list ${
            this.state.openedNavigation ? "navigation__list--opened" : ""
          }`}>
          <img src={logo} alt="Logo Fluent" className="navigation__logo" />
          {navigation.map(navItem => {
            return <NavItem key={navItem.name} name={navItem.name} href={navItem.href} />;
          })}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
