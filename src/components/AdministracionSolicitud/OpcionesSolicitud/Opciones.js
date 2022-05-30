import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { rechazar } from '../../../helpers/metodosOpcionesSolicitud';
import  {ModalRechazo}  from '../Modal/ModalRechazo';
import { ModalGenerico } from '../Modal/ModalGenerico';

import './estilos-opciones.css'

export const Opciones = ( {capacidad, openModal, capacidadOriginal} ) => {
    
    const navigate = useNavigate();
    const[openModalRechazo,setOpenModalRechazo,closeModalRechazo]=useState(false);


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
        <>
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
                                onClick={ setOpenModalRechazo(true)}
                            >
                                Rechazar
                            </button>
                        )
                        : ''
                    }
                </div>
            </section>
        </div>
        {openModalRechazo && 
            <ModalGenerico  isOpen={openModalRechazo} closeModal={closeModalRechazo}>
              <ModalRechazo 
            //   nombre_doc ={nombreDocenteSolicitud} 
            //   ape_doc ={apellidoDocenteSolicitud} 
            //   motivoRechazo=""
            //   nro_est ={numeroEstudiantesSolicitud} 
            //   motivo ={motivoSolicitud}
            //   fecha_res ={fechaSolicitud}
            //   hora_res ={horaInicioSolicitud}
    
            //   periodo ={periodoSolicitud}
            //   estado ="Solicitud Rechazada"
            //   materiaId={materia_id}
            //   materiaSolicitud={materiaSolicitud}
            //   solicitudId={soliID}
              
              closeModal={setOpenModalRechazo}/> 
            </ModalGenerico>
            }
            </>
    )
    
}
