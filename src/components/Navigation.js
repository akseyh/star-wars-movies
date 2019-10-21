import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link, HashRouter } from 'react-router-dom';

import logo from '../img/star-wars-logo.png'

class Navigation extends React.Component {
    render() {
        return(
            <HashRouter>
                <Link to={'/'} className="navbar-brand"> 
                    <Image src={logo} width="100px"/>
                </ Link>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" id="navbarToggleExternalContent">
                        <Link to='/movies' className="nav-link"> Movies </ Link>
                        <Link to='/peoples' className="nav-link"> Peoples </ Link>
                        <Link to='/planets' className="nav-link"> Planets </ Link>
                        <Link to='/starships' className="nav-link"> Starships </ Link>
                    </Nav>
                </Navbar.Collapse>
            </HashRouter>
        )
    }
}

export default Navigation;