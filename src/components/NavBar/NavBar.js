import React from 'react';
import { Link } from 'react-router-dom'

export const NavBar = ({ children }) => {
    return ( 
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                to='/' 
                className="navbar-brand"
            >
                Asignación de Aulas
            </Link>
            {children}
            
        </nav>
        )
    }
