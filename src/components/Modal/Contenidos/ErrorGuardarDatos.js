import React from 'react'
import WarningImg from '../../../images/warning.svg'

export const ErrorGuardarDatos = ({ cerrarModal }) => {
    return (
        <>
            <h2>Ups!</h2>
            <hr/>
            <div className='contenedor-advertencia'>
                <img
                    src={ WarningImg }
                    className='img-advertencia'
                />
                <p className='parrafo-advertencia'>
                    No se pudo guardar los datos ingresados, Porfavor intenta nuevamente.
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
