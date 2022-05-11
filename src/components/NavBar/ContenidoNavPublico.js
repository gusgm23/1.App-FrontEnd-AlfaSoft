import React from 'react'
import { NavLink } from 'react-router-dom'

export const ContenidoNavPublico = () => {
  return (
    <>
            <div className="navbar-collapse">
                <div className='navbar-nav'>
                <NavLink 
                        exact='true'
                        to='/' 
                        className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )}
                    >
                        Página principal
                    </NavLink>
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
                </ul>
            </div>
        </>
  )
}
