import React from 'react';
import { useNavigate } from 'react-router-dom';
import errorImg from '../../images/noPermitido.svg';

import './estilos404.css';

export const Error404Screen = () => {
    
    const navigate = useNavigate();

    const volverAtras = () => {
        
        navigate(-1);

    }

    return (
        <div className='contenedor-404 animate__animated animate__fadeIn'>
            <img 
                src={errorImg} 
                alt='error 404'
                className='img-404'
            />
            <h2>Lo sentimos!</h2>
            <p className='parrafo-404'>No tienes permisos para acceder a esta sección.</p>
            <button onClick={ volverAtras }>Volver</button>
        </div>
    )
}
