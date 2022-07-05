import React from 'react'
import { NavLink } from 'react-router-dom';
import { quitarAulaTabla } from '../../../helpers/quitarAulaTabla';
import okImg from '../../../images/ok.svg'

export const HechoSolicitud = ({ cerrarModal, funcResetSol=()=>{} }) => {

    const btnReset = () => {
        funcResetSol();
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
                    Los datos fueron guardados exitosamente.
                </p>
                <button
                    className='btn-entendido'
                    onClick={btnReset}
                >
                     <NavLink exact='true' to='/docente/listarsolicitudes'>Entendido</NavLink>
                </button>
            </div>
        </>
    )
}
