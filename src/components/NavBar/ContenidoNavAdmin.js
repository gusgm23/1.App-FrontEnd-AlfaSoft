import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
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
                    <Link 
                        to='/admin/adminhome' 
                        className="navbar-brand"
                    >
                        Reserva de Aulas
                    </Link>
                    <NavLink 
                        exact='true'
                        to='/admin/verusarios' 
                        className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )}
                    >
                        Ver Usuarios
                    </NavLink>
                    <NavLink 
                        exact='true'
                        to='/admin/verusarios' 
                        className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )}
                    >
                        Ver Usuarios
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
                    <NavLink 
                        exact='true' 
                        to='/admin/administrarsolicitud' 
                        className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )}
                    >
                            admin soli
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
