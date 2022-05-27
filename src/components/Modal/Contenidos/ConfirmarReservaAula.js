import React from 'react'

import confirmImg from '../../../images/preg.svg'
import './estilos-contenidos.css'

export const ConfirmarReservaAula = ( {cerrarModal, funcOk} ) => {
    
    const reservarAula = () => {

        funcOk();
        cerrarModal();

    }
    
    return (
        <>
            <h2>Atención!</h2>
            <hr/>
            <div className='contenedor-advertencia'>
                <img
                    src={ confirmImg }
                    className='img-advertencia'
                    alt='warnning img'
                />
                <p className='parrafo-advertencia-reserva'>
                    Esta seguro de reservar el aula?
                </p>
                <div className='contenedor-btns-confirmacion'>
                    <button
                        className='btn-cancelar btn-confirmacion'
                        onClick={cerrarModal}
                    >
                        Cancelar
                    </button>
                    <button
                        className='btn-guardar btn-confirmacion'
                        onClick={reservarAula}
                    >
                        Reservar
                    </button>
                </div>
            </div>
        </>
    )
}
