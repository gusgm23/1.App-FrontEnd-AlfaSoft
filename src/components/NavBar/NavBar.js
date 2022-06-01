import React from 'react';

import umssLogo from '../../images/UMSS_logo.png'
import './estilos-navBar.css'

export const NavBar = ({ children }) => {
    return ( 
        <nav className="navbar navbar-expand-sm bg-light animate__animated animate__fadeIn">
            <img  src={umssLogo} alt='Logo umss'/>
            {children}
            
        </nav>
        )
    }
