import React from 'react';
import errorImg from '../../images/errorPage.png';

import './estilos404.css';

export const Error404Screen = () => {
    return (
        <div className='contenedor-404'>
            <img 
                src={errorImg} 
                alt='error 404'
                className='img-404'
            />
            <h1>Error 404!</h1>
            <p className='parrafo-404'>No se encontró la página ingresada.</p>
            <hr/>
        </div>
    )
}
