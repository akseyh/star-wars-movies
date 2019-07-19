import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../img/star-wars-logo.png'


function Header () {
    return(
        <Navbar bg="dark" variant="dark" >
                <Link to={'/'} className="navbar-brand"> 
                    <Image src={logo} width="100px"/>
                </ Link>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" id="navbarToggleExternalContent">
                        <Link to={'/movies'} className="nav-link"> Movies </ Link>
                        <Link to={'/peoples'} className="nav-link"> Peoples </ Link>
                        <Link to={'/planets'} className="nav-link"> Planets </ Link>
                        <Link to={'/starships'} className="nav-link"> Starships </ Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;