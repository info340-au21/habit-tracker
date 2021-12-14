import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { signOut } from "firebase/auth";
import { Nav, Navbar } from "react-bootstrap";

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
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbarHeader"
      role="navigation"
    >
      <NavLink exact to="/" activeClassName="activeLink" aria-label="home page">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">
            habit-trackr.
          </a>
        </div>
      </NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <ul className="nav navbar-nav" id="NavContainer">
            <li activeClassName="linkElement">
              <NavLink
                exact
                to="/"
                activeClassName="activeLink"
                aria-label="home page"
              >
                Home
              </NavLink>
            </li>
            <li activeClassName="linkElement">
              <NavLink
                exact
                to="/about"
                activeClassName="activeLink linkElement"
                aria-label="about page"
              >
                About
              </NavLink>
            </li>
            <li activeClassName="linkElement">
              <NavLink
                exact
                to="/stats"
                activeClassName="activeLink linkElement"
                aria-label="statistics page"
              >
                Statistics
              </NavLink>
            </li>
            <li activeClassName="linkElement">
              <NavLink
                exact
                to="/motivation"
                activeClassName="activeLink linkElement"
                aria-label="motivation page"
              >
                Motivation
              </NavLink>
            </li>
            <li activeClassName="linkElement">
              <Button onClick={handleClick} aria-label="sign out">
                Sign Out
              </Button>
            </li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
