import React from 'react'

import okImg from '../../../images/ok.svg'

export const AulaReservada = ( {cerrarModal, funcOk} ) => {
    
    const btnEntendido = () => {

        funcOk();
        cerrarModal();

    }

    return (
        <>
            <h2>Perfecto!</h2>
            <hr/>
            <div className='contenedor-advertencia'>
                <img
                    src={ okImg }
                    className='img-advertencia'
                />
                <p className='parrafo-aula-registrada'>
                    El aula ha sido reservado exitosamente.
                </p>
                <button
                    className='btn-entendido'
                    onClick={ btnEntendido }
                >
                    Entendido
                </button>
            </div>
        </>
    )
}
