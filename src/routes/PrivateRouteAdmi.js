import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authContext'

export const PrivateRouteAdmi = ({ children }) => {
    
    const { user } = useContext(AuthContext);

    const location = useLocation();

    localStorage.setItem('lastPath', location.pathname);

    return (user.logged && user.rol === 'Administrador')
        ? children
        : (user.rol === 'Docente' || user.rol === 'Auxiliar')
            ? <Navigate to='/docente/home'/>
            : <Navigate to='/login'/>

}
