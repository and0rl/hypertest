import React from "react";
import { NavLink } from "react-router-dom";
//import logoMenu from "../img/logoMenu.png";

export const Header = () => (
  <div className="wrapper">
    <nav className="site-navigation">
      <NavLink to="/">
        Logo{/* <img src={logoMenu} className="logo" alt="logo" /> */}
      </NavLink>

      <ul className="menu">
        <li className="menu-item menu-item-home">
          <NavLink to="/about">About</NavLink>
        </li>

        <li className="menu-item menu-item-about">
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
      </ul>
    </nav>
  </div>
);
