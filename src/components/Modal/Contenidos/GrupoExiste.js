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
                No se pudo guardar los datos ingresados debido a que ya existe un grupo con los datos ingresados.
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
