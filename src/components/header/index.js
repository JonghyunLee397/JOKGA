import React from 'react';
import { Navbar, NavbarBrand, Nav, NavLink } from 'react-bootstrap';
import './style.scss'

const Header = () => {
  return (
    <div>
      <Navbar bg='light' variant='navbar' expand='lg' className='navbar'>
        <NavbarBrand>족과의 동침</NavbarBrand>
        <Nav variant='tabs' justify={true} fill={true}>
          <NavLink>Hello</NavLink>
          <NavLink>About Us</NavLink>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Header