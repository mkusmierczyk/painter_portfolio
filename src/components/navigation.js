import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import { ReactComponent as Pallete } from "../assets/palette-solid.svg";
import { ReactComponent as Pencil } from "../assets/pencil-ruler-solid.svg";
import { ReactComponent as AboutMe } from "../assets/quote-left-solid.svg";
import { ReactComponent as Contact } from "../assets/envelope-regular.svg";
import { ReactComponent as Instagram } from "../assets/instagram-brands.svg";
import { ReactComponent as Tumblr } from "../assets/tumblr-square-brands.svg";
import { ReactComponent as Facebook } from "../assets/facebook-square-brands.svg";
function Navigation() {



  return (
    <>
      <nav class="navbar">
     
        <ul class="navbar-nav">
          <li class="logo">
            <a href="#" class="nav-link">
              <span class="link-text logo-text">Pasternak</span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="angle-double-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
              >
                <g class="fa-group">
                  <path
                    fill="currentColor"
                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                    class="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                    class="fa-primary"
                  ></path>
                </g>
              </svg>
            </a>
          </li>

          <li class="nav-item">
            <NavLink exact={true} activeClassName='is-active' to="/paintings" class="nav-link">
            <Pallete/>
              <span class="link-text">Malarstwo</span>
            </NavLink>
          </li>

          <li class="nav-item">
            <NavLink exact={true} activeClassName='is-active' to="/graphics" class="nav-link">
              <Pencil/>
              <span class="link-text">Grafika</span>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink exact={true} activeClassName='is-active' to="/about" class="nav-link">
             <AboutMe/>
              <span class="link-text">O mnie</span>
            </NavLink>
          </li>

          <li class="nav-item">
            <NavLink exact={true} activeClassName='is-active' to="/contact" class="nav-link">
              <Contact/>
              <span class="link-text">Kontakt</span>
            </NavLink>
          </li>

          <li class="nav-item" id="themeButton">
            <a href="#" class="nav-link">
             <Instagram/>
            </a>
             <a href="#" class="nav-link">
             <Tumblr/>
             </a>
             <a href="#" class="nav-link">
             <Facebook/>
             </a>

           
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
