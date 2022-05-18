import React from 'react';
import { Link } from 'react-router-dom'

import umssLogo from '../../images/UMSS_logo.png'
import './estilos-navBar.css'

export const NavBar = ({ children }) => {
    return ( 
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <img  src={umssLogo} alt='Logo umss'/>
            <Link 
                to='/' 
                className="navbar-brand"
            >
                Reserva de Aulas
            </Link>
            {children}
            
        </nav>
        )
    }
