import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { signOut } from "firebase/auth";
/* signout user w/ firebase */

export default function NavBar(props) {
  let auth = props.auth;
  const handleClick = (event) => {
    event.preventDefault();
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  return (
    <nav id="navbar" className="navbar" role="navigation">
      <div className="container-fluid" role="banner">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">
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
          <li>
            <Button onClick={handleClick}>Sign Out</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
