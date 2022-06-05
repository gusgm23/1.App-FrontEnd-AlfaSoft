import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { rechazar } from '../../../helpers/metodosOpcionesSolicitud';
import { ModalGenerico } from '../../Modal/ModalGenerico';
import { ModalRechazo } from '../../Modal/ModalRechazo';



import './estilos-opciones.css'

export const Opciones = ( {soli},{capacidad, openModal, capacidadOriginal} ) => {

    const {state:solicitud} = useLocation();    
    const capOrig = parseInt(capacidad);

    const navigate = useNavigate();
    const[openModalRechazo,setOpenModalRechazo,closeModalRechazo]=useState(false);


    const volverAtras = () => {

        if( capOrig > 0 && capacidad !== capacidadOriginal ){
            openModal();
        }else{
            navigate(-1);
        }

    }

    const rechazarSolicitud = () => {

        //rechazar();
        console.log(solicitud)

    }

    return (
        <>
        <div className='contenedor-opciones-solicitud animate__animated animate__fadeIn'>
            <section id='seccion-opciones-soli'>
                <div className='contenedor-btns-aprob'>
                    <button 
                        id='btn-opciones-soli-volver'
                        onClick={ () => volverAtras() }
                    >
                        <i className="bi bi-chevron-left"></i> Volver 
                    </button>

                            <button 
                                id='btn-opciones-soli'
                                className='btn-rechazar-soli'
                                onClick={ () => 
                                    // rechazarSolicitud()
                                     setOpenModalRechazo(true)
                                }
                            >
                             <i className="bi bi-x-lg"></i> Rechazar
                            </button>
                    {/* {
                        ( capacidad > 0 && capOrig === parseInt(capacidadOriginal) )
                        ? (
                            <button 
                                id='btn-opciones-soli'
                                className='btn-rechazar-soli'
                                onClick={ () => 
                                    rechazarSolicitud()
                                    // setOpenModalRechazo(true)
                                }
                            >
                                Rechazar
                            </button>
                        )
                        : ''
                    } */}
                </div>
            </section>
        </div>
        {openModalRechazo && 
            <ModalGenerico  isOpen={openModalRechazo} closeModal={closeModalRechazo}>
              <ModalRechazo 
              closeModal={setOpenModalRechazo}/> 
            </ModalGenerico>
            }
            </>
    )
    
}
