import React from 'react'

import WarningImg from '../../../images/warning.svg'

export const ErrorReservaAula = ( {cerrarModal} ) => {
    return (
        <>
            <h2>Ups!</h2>
            <hr/>
            <div className='contenedor-advertencia'>
                <img
                    src={ WarningImg }
                    className='img-advertencia'
                    alt='fail img'
                />
                <p className='parrafo-advertencia'>
                    No se pudo reservar el aula, Porfavor intenta nuevamente.
                </p>
                <button
                    className='btn-entendido'
                    onClick={cerrarModal}
                >
                    Entendido
                </button>
            </div>
        </>
    )
}
