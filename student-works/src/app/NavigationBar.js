import React from "react";
import logo from "./logo.png";
import "../App.css";
import { Navbar, NavbarBrand } from "reactstrap";

function NavigationBar() {
  return (
    <Navbar color="info" fixed="top">
      <NavbarBrand href="/" className="logo">
        <img
          alt="logo"
          src={logo}
          style={{
            height: 40,
            width: 40,
          }}
        />
        <h1 className="logo-heading">Students</h1>
      </NavbarBrand>
    </Navbar>
  );
}

export default NavigationBar;
