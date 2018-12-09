import React from 'react';

import './styles/navItem.scss';

const NavItem = props => (
  <li className="navigation__item">
    <a className="navigation__link" href={props.href}>
      {props.name}
    </a>
  </li>
);

export default NavItem;
