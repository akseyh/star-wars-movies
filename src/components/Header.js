import React from 'react';
import { Navbar } from 'react-bootstrap';

import Navigation from '../components/Navigation';


function Header () {
    return(
        <Navbar bg="dark" variant="dark" >
            <Navigation />
        </Navbar>
    );
}

export default Header;