import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../assets/imgs/Logo.svg';



function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" >
      <Container>
      <div className="col-md-2 d-none d-md-block"></div>
        <Navbar.Brand as={Link} to={'/'}><img src={logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-evenly ' >
          <Nav className='p-lg-3 align-items-center'>
            <Nav.Link as={Link} to={'/'} className='btn btn-success nav-link-custom fw-semibold'>Home</Nav.Link>
            <Nav.Link as={Link} to={'/about'} className='btn btn-success nav-link-custom fw-semibold'>about</Nav.Link>
            <Nav.Link as={Link} to={'/menu'} className='btn btn-success nav-link-custom fw-semibold'>Menu</Nav.Link>
            <Nav.Link as={Link} to={'/reservations'} className='btn btn-success nav-link-custom fw-semibold'>Reservations</Nav.Link>
            <Nav.Link as={Link} to={'/booking'} className='btn btn-success nav-link-custom fw-semibold'>Order Online</Nav.Link>
            <Nav.Link as={Link} to={'/login'} className='btn btn-success nav-link-custom fw-semibold' >Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      <div className="col-md-2 d-none d-md-block"></div>
      </Container>
    </Navbar>
  );
}

export default NavBar;