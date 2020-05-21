import React from 'react';
import { Navbar, NavbarBrand, Nav, NavLink } from 'react-bootstrap';
import { Paper } from '@material-ui/core'
import picture from './logo.jpg'
import './style.scss'

const Header = () => {
  return (
    <div>
      <Paper 
        elevation={4} 
        variant='elevation' 
        square
      >
      <Navbar bg='white' variant='navbar' expand='lg' className='navbar'>
        <NavbarBrand href="/"><img src={picture} alt='Jok Ga A Dong Chim' className='picture'/></NavbarBrand>
        <Nav variant='tabs' justify={true} fill={true}>
          <NavLink href='/menu'>Hello</NavLink>
          <NavLink>About Us</NavLink>
        </Nav>
      </Navbar>
      </Paper>
    </div>
  )
}

export default Header
