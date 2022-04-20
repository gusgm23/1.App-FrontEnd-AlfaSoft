import React from 'react'
import AdvertenciaImg from '../../../images/advertencia.svg'

export const AdvertenciaFormVacio = ({cerrarModal}) => {
    return (
        <>
            <h2>Error!</h2>
            <hr/>
            <div className='contenedor-advertencia'>
                <img
                    src={ AdvertenciaImg }
                    className='img-advertencia'
                />
                <p className='parrafo-advertencia'>
                    Existen campos vacios dentro del formulario, debes llenarlos!
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
