import React from 'react';
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
        return ( 
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">Asignación de Aulas</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink 
                            exact='true' 
                            to='/' 
                            className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )}
                            aria-current="page"
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            exact='true'
                            to='/registroaula' 
                            className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )}
                        >
                            Registrar Aula
                        </NavLink>
                        <NavLink
                            exact='true'
                            to='/registrorol'
                            className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )}
                        >
                            Registrar Roles
                        </NavLink>
                        <NavLink 
                            exact='true' 
                            to='/registrousuario' 
                            className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )}
                        >
                            Registrarse
                        </NavLink>
                        <NavLink 
                            exact='true' 
                            to='/registromateria' 
                            className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )}
                        >
                                Registrar Materia
                        </NavLink>
                        <NavLink 
                            exact='true' 
                            to='/versolicitudes' 
                            className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )}
                        >
                                Solicitudes
                        </NavLink>
                        <NavLink 
                            exact='true' 
                            to='/reservaaulas' 
                            className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )}
                        >
                                Reservar Aula
                        </NavLink>
                        <NavLink 
                            exact='true' 
                            to='/veraulas' 
                            className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )}
                        >
                                Aulas
                        </NavLink>
                        <NavLink 
                            exact='true' 
                            to='/vermaterias' 
                            className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )}
                        >
                                Materias
                        </NavLink>
                        <NavLink 
                            exact='true' 
                            to='/login' 
                            className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )}
                        >
                                Iniciar Sesión
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
            </div>
        </nav>
        )
    }
