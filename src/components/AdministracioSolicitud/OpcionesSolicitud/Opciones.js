import React from 'react'
import { useNavigate } from 'react-router-dom'

import './estilos-opciones.css'

export const Opciones = () => {
    
    const navigate = useNavigate();

    const volverAtras = () => {

        navigate(-1);

    }

    return (
        <div className='contenedor-opciones-solicitud animate__animated animate__fadeIn'>
            <section id='seccion-opciones-soli'>
                <div className='contenedor-btns-aprob'>
                    <button 
                        id='btn-opciones-soli'
                        className='btn-rechazar-soli'
                    >
                        Rechazar
                    </button>
                    <button 
                        id='btn-opciones-soli'
                        className='btn-aprobar-soli'
                    >
                        Aprobar
                    </button>
                </div>
                <div>
                    <button 
                        id='btn-opciones-soli-volver'
                        onClick={ volverAtras }
                    >
                        <i className="bi bi-chevron-left"></i> Volver
                    </button>
                </div>
            </section>
        </div>
    )
}
