import React, { useState } from "react";
import logo from "./logo.png";
import "../App.css";
import { Navbar, NavbarText } from "reactstrap";

function Footer() {
  return (
    <Navbar color="info" fixed="bottom">
      <NavbarText>© 2023 Student works</NavbarText>
    </Navbar>
  );
}

export default Footer;
