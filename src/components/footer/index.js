import React from 'react'
import { Navbar, NavbarBrand, Nav, NavLink } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <Navbar bg='light' expands='lg'>
        <NavbarBrand>족과의 동침</NavbarBrand>
        <Nav variant='tabs'>
          <NavLink>About Us</NavLink>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Footer