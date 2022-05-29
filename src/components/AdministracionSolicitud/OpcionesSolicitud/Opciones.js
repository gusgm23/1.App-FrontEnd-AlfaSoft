import React from 'react'
import { useNavigate } from 'react-router-dom'
import { rechazar } from '../../../helpers/metodosOpcionesSolicitud';

import './estilos-opciones.css'

export const Opciones = ( {capacidad, openModal, capacidadOriginal} ) => {
    
    const navigate = useNavigate();

    const volverAtras = () => {

        if( capacidad > 0 ){
            openModal();
        }else{
            navigate(-1);
        }

    }

    const rechazarSolicitud = () => {

        rechazar();

    }

    return (
        <div className='contenedor-opciones-solicitud animate__animated animate__fadeIn'>
            <section id='seccion-opciones-soli'>
                <div className='contenedor-btns-aprob'>
                    <button 
                        id='btn-opciones-soli-volver'
                        onClick={ volverAtras }
                    >
                        <i className="bi bi-chevron-left"></i> Volver 
                    </button>
                    {
                        ( capacidad > 0 && capacidad === parseInt(capacidadOriginal) )
                        ? (
                            <button 
                                id='btn-opciones-soli'
                                className='btn-rechazar-soli'
                                onClick={ rechazarSolicitud }
                            >
                                Rechazar 
                            </button>
                        )
                        : ''
                    }
                </div>
            </section>
        </div>
    )
}
