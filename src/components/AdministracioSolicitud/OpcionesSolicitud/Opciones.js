import React from 'react'
import { useNavigate } from 'react-router-dom'
import { aprobarSolicitud, rechazar } from '../../../helpers/metodosOpcionesSolicitud';

import './estilos-opciones.css'

export const Opciones = ( {capacidad} ) => {
    
    const navigate = useNavigate();

    const volverAtras = () => {

        navigate(-1);

    }

    const terminarProceso = () => {

        aprobarSolicitud( capacidad );

    }

    const rechazarSolicitud = () => {

        rechazar();

    }

    return (
        <div className='contenedor-opciones-solicitud animate__animated animate__fadeIn'>
            <section id='seccion-opciones-soli'>
                <div className='contenedor-btns-aprob'>
                    <button 
                        id='btn-opciones-soli'
                        className='btn-rechazar-soli'
                        onClick={ rechazarSolicitud }
                    >
                        Rechazar
                    </button>
                    <button 
                        id='btn-opciones-soli'
                        className='btn-aprobar-soli'
                        onClick={ terminarProceso }
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
