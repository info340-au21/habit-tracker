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
      className="navbar"
      class="navbar"
      id="navbar"
    >
      <NavLink exact to="/" activeClassName="activeLink">
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
              <NavLink exact to="/" activeClassName="activeLink">
                Home
              </NavLink>
            </li>
            <li activeClassName="linkElement">
              <NavLink
                exact
                to="/about"
                activeClassName="activeLink linkElement"
              >
                About
              </NavLink>
            </li>
            <li activeClassName="linkElement">
              <NavLink
                exact
                to="/stats"
                activeClassName="activeLink linkElement"
              >
                Statistics
              </NavLink>
            </li>
            <li activeClassName="linkElement">
              <NavLink
                exact
                to="/recommend"
                activeClassName="activeLink linkElement"
              >
                Motivation
              </NavLink>
            </li>
            <li activeClassName="linkElement">
              <Button onClick={handleClick}>Sign Out</Button>
            </li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
