import React from 'react'
import WarningImg from '../../../images/warning.svg'

export const GrupoExiste = ({ cerrarModal }) => {
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
                Ya existe un grupo con el nombre que ingresaste, por favor prueba con otro.
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
