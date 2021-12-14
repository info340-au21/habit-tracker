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
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">
            habit-trackr.
          </a>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <NavLink exact to="/" activeClassName="activeLink" aria-label="home page">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/about" activeClassName="activeLink" aria-label="about page">
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/stats" activeClassName="activeLink" aria-label="statistics page">
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/motivation" activeClassName="activeLink" aria-label="motivation page">
              Motivation
            </NavLink>
          </li>
          <li>
            <Button onClick={handleClick} aria-label="sign out button">Sign Out</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
