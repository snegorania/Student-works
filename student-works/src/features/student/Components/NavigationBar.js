import React, { useState } from 'react';
import logo from './logo.png';
import '../../../App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';


function NavigationBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
    className="my-2"
    color="dark"
    dark
    >
    <NavbarBrand href="/" className='logo'>
        <img
          alt="logo"
          src={logo}
          style={{
            height: 40,
            width: 40
          }}
        />
        <h1 className="logo-heading">Students</h1>
    </NavbarBrand>
  </Navbar>
  );
}

export default NavigationBar;