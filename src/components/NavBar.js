
import React from 'react';
import {NavLink} from 'react-router-dom';



// import { timeStamp } from "console";

export function NavBar(props) {
    return (
        <nav id="navbar" className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">habit-trackr.</a>
                </div>
                <ul className="nav navbar-nav">
                    <li><NavLink exact to="/" activeClassName="activeLink">Home</NavLink></li>
                    <li><NavLink exact to="/about" activeClassName="activeLink">About</NavLink></li>
                    <li><NavLink exact to="/profile" activeClassName="activeLink">Profile</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}