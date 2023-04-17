import React from "react";
import logo from "./logo.png";
import "./header.css";

function NavigationBar() {
  return (
    <header className="header">
      <nav className="header-nav">
        <div>
          <a className="header-link" href="#">
            <div className="header-logo">
              <img src={logo} alt="Logo" className="logo-img" />
              <h1 className="header-heading">StudentWorks</h1>
            </div>
          </a>
        </div>
        <ul class="nav-list">
          <li class="nav-item active">
            <a class="header-link" aria-current="page" href="#">
              Students
            </a>
          </li>
          <li class="nav-item">
            <a class="header-link" href="#">
              Groups
            </a>
          </li>
          <li class="nav-item">
            <a class="header-link" href="#">
              Topics
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;
