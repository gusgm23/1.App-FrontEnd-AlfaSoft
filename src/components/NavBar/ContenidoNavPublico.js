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
                        Reserva de Aulas
                    </Link>
                    <NavLink 
                        exact='true'
                        to='/about' 
                        className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )}
                    >
                        Acerca de
                    </NavLink>
                    
                </div>
            </div>
                                
            <div className="navbar-collapse collapse w-300 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav">
                <NavLink 
                    exact='true' 
                    to='/login' 
                    className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )}
                >
                        Iniciar Sesión
                </NavLink>
                <NavLink 
                    exact='true' 
                    to='/registrousuario' 
                    className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )}
                >
                        Registrase
                </NavLink>
                </ul>
            </div>
        </>
  )
}
