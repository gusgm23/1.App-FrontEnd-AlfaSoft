import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types';

export const ContenidoNavDocente = () => {
    
    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: types.logout });

        navigate('login', {
            replace: true
        })
    }
    
    return (
        <>
            <div className="navbar-collapse">
                <div className='navbar-nav'>
                <NavLink 
                        exact='true'
                        to='/docente/home' 
                        className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )}
                    >
                        Página principal
                    </NavLink>
                    <NavLink 
                        exact='true'
                        to='/docente/reservaaulas' 
                        className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )}
                    >
                        Registrar Solicitud
                    </NavLink>
                    <NavLink
                        exact='true'
                        to='/docente/verhistorial'
                        className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )}
                    >
                        Ver solicitudes
                    </NavLink>
                </div>
            </div>
                                
            <div className="navbar-collapse collapse w-300 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav">
                    <span className='nav-item nav-link text-info'>
                        { user.name }
                    </span>
                    <button
                        className='nav-item nav-link btn'
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </>
    )
}
