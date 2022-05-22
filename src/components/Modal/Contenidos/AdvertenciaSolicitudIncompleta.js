import React from 'react'

import AdvertenciaImg from '../../../images/advertencia.svg'

export const AdvertenciaSolicitudIncompleta = ( {cerrarModal} ) => {
    return (
        <>
            <h2>Advertencia!</h2>
            <hr/>
            <div className='contenedor-advertencia'>
                <img
                    src={ AdvertenciaImg }
                    className='img-advertencia'
                />
                <p className='parrafo-advertencia-solicitud'>
                    No has terminado la asignación de aulas para la solicitud, debes asignar mas aulas a la solicitud!
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
