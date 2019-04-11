import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.svg";

export const Header = () => (
  <header className="header">
    <nav className="container">
      <NavLink to="/">
        <img src={logo} className="logo" alt="logo" />
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
  </header>
);
