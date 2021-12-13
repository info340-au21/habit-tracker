import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar(props) {
  return (
    <nav id="navbar" className="navbar">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            habit-trackr.
          </a>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <NavLink exact to="/" activeClassName="activeLink">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/about" activeClassName="activeLink">
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/stats" activeClassName="activeLink">
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/motivation" activeClassName="activeLink">
              Motivation
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
