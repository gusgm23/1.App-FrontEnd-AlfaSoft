import React from 'react';
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">Asignación de Aulas</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink exact='true' activeClassName="active" to='/' className="nav-link" aria-current="page">Home</NavLink>
                        <NavLink exact='true' activeClassName="active" to='/registroaula' className="nav-link">Registrar Aula</NavLink>
                        <NavLink exact='true' activeClassName="active" to='/registrousuario' className="nav-link">Registrarse</NavLink>
                        <NavLink exact='true' activeClassName="active" to='/registromateria' className="nav-link">Registrar Materia</NavLink>

                        <NavLink exact='true' activeClassName="active" to='/veraulas' className="nav-link">Aulas</NavLink>
                        <NavLink exact='true' activeClassName="active" to='/vermaterias' className="nav-link">Materias</NavLink>

                        <NavLink exact='true' activeClassName="active" to='/login' className="nav-link">Login</NavLink>
                        <NavLink exact='true' activeClassName="active" to='/about' className="nav-link">About</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
//probando rama dev