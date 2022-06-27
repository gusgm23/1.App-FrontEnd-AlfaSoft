import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const ContenidoNavPublico = () => {
  return (
    <>
            <div className="navbar-collapse">
                <div className='navbar-nav'>
                    <Link 
                        to='/' 
                        className="navbar-brand"
                    >
                       Sistema Reserva de Aulas
                    </Link>
                    {/* <NavLink exact='true'to='/about' className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : 'no-active' )}> */}
                        {/* Acerca de */}
                    {/* </NavLink> */}
                    
                </div>
            </div>
                                
            <div className="navbar-collapse collapse w-300 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav">
                <NavLink 
                    exact='true' 
                    to='/login' 
                    className={({ isActive }) => 'nav-item nav-link icon-home ' + ( isActive ? 'active' : 'no-active' )}
                >
                        <i className="bi bi-box-arrow-in-right icon-login"></i>
                </NavLink>
                <NavLink 
                    exact='true' 
                    to='/registrousuario' 
                    className={({ isActive }) => 'nav-item nav-link icon-home ' + ( isActive ? 'active' : 'no-active' )}
                >
                        <i className="bi bi-person-plus icon-register"></i>
                </NavLink>
                </ul>
            </div>
        </>
  )
}
