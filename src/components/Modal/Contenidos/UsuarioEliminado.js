import React from 'react'
import { quitarAulaTabla } from '../../../helpers/quitarAulaTabla'
import okImg from '../../../images/ok.svg'

export const UsuarioEliminado = ({ cerrarModal, idUsuario, listaUsuarios, setter }) => {

    const actualizarUsuarios = () => {
        quitarAulaTabla(idUsuario, listaUsuarios, setter);
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
                <p className='parrafo-advertencia'>
                    El usuario fue eliminado exitosamente.
                </p>
                <button
                    className='btn-entendido'
                    onClick={actualizarUsuarios}
                >
                    Entendido
                </button>
            </div>
        </>
    )
}
