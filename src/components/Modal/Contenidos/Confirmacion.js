import React from 'react'

import confirmacionImg from '../../../images/preg.svg'

export const Confirmacion = ({cerrarModal, funcGuardar}) => {
    
    const btnGuardar = () => {
        funcGuardar();
        cerrarModal();
    }

    return (
        <>
            <h2>Atención!</h2>
            <hr/>
            <div className='contenedor-advertencia'>
                <img
                    src={ confirmacionImg }
                    className='img-advertencia'
                />
                <p className='parrafo-advertencia'>
                    Esta seguro de guardar los datos ingresados?
                </p>
                <div className='contenedor-btns-confirmacion'>
                    <button
                        className='btn-cancelar-guardado btn-confirmacion'
                        onClick={cerrarModal}
                    >
                        Cancelar
                    </button>
                    <button
                        className='btn-guardar btn-confirmacion'
                        onClick={() => btnGuardar()}
                    >
                        Guardar
                    </button>
                </div>
            </div>
        </>
    )
}
