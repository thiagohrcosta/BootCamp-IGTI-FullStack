import React, { Component } from "react";
import css from './navbar.custom.css';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className={css.navbarConfig}>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              MovieTrailer
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Home</a>
              </li>
              <li>
                <a href="badges.html">Portfolio</a>
              </li>
              <li>
                <a href="collapsible.html">Contact me</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
