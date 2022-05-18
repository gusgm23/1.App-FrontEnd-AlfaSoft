import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const ContenidoNavAdmin = () => {
    
    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleLogout = () => {
        dispatch({ type: types.logout });

        navigate('login', {
            replace:true
        })
    }
    
    return (
        <>
            <div className="navbar-collapse">
                <div className='navbar-nav'>
                <NavLink 
                        exact='true'
                        to='/admin/adminhome' 
                        className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )}
                    >
                        Página principal
                    </NavLink>
                    <NavLink 
                        exact='true'
                        to='/admin/registroaula' 
                        className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )}
                    >
                        Registrar Aula
                    </NavLink>
                    <NavLink
                        exact='true'
                        to='/admin/registrorol'
                        className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )}
                    >
                        Registrar Roles
                    </NavLink>
                    <NavLink 
                        exact='true' 
                        to='/admin/registromateria' 
                        className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )}
                    >
                            Registrar Materia
                    </NavLink>
                    <NavLink 
                        exact='true' 
                        to='/admin/versolicitudes' 
                        className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )}
                    >
                            Solicitudes
                    </NavLink>
                    <NavLink 
                        exact='true' 
                        to='/admin/veraulas' 
                        className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )}
                    >
                            Aulas
                    </NavLink>
                    <NavLink 
                        exact='true' 
                        to='/admin/vermaterias' 
                        className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )}
                    >
                            Materias
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
