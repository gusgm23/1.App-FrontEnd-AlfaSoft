import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
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
                    <Link 
                        to='/docente/home' 
                        className="navbar-brand"
                    >
                        Reserva de Aulas
                    </Link>
                    <NavLink
                        exact='true'
                        to='/docente/listarsolicitudes'
                        className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : 'no-active' )}
                    >
                        Solicitudes pendientes
                    </NavLink>
                    <NavLink
                        exact='true'
                        to='/docente/veraprobados'
                        className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : 'no-active' )}
                    >
                        Solicitudes aprobadas
                    </NavLink>
                </div>
            </div>
                                
            <div className="navbar-collapse collapse w-300 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav">
                    <span className='nav-item nav-link text-info'>
                        { user.name } - { user.rol }
                    </span>
                    <button
                        className='nav-item nav-link btn'
                        onClick={ handleLogout }
                    >
                        Cerrar sesión
                    </button>
                </ul>
            </div>
        </>
    )
}
