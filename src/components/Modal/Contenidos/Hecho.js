import React from 'react'
import { quitarAulaTabla } from '../../../helpers/quitarAulaTabla';
import okImg from '../../../images/ok.svg'

export const Hecho = ({ cerrarModal, funcReset=()=>{}  }) => {

    const btnReset = () => {
        funcReset();
        cerrarModal();
    }

    return (
        <>
            <h2>Perfecto!</h2>
            <hr/>
            <div className='contenedor-advertencia'>
                <img
                    src={ okImg }
                    className='img-advertencia img-hecho'
                />
                <p className='parrafo-advertencia'>
                    Los datos ingresados fueron guardados exitosamente.
                </p>
                <button
                    className='btn-entendido'
                    onClick={btnReset}
                >
                    Entendido
                </button>
            </div>
        </>
    )
}
