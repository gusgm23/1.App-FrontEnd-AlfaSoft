import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { reducirCapacidadSolicitud } from '../../helpers/actualizarCapacidadSolicitud';

import { generarAulasDisponibles } from '../../helpers/generarAulasDisponibles';
import { quitarAulaTabla } from '../../helpers/quitarAulaTabla';
import { reservarAulas } from '../../helpers/reservarAulas';
import { cambiarCapacidadSolicitud } from '../../helpers/setterCapacidadSolicitud';
import { useModal } from '../../hooks/useModal';
import { getAulas } from '../../service/apiAulas';
import { getReserva } from '../../service/apiReservaAulas';
import { getSolicitudId } from '../../service/apiSolicitudAulas';
import { AdvertenciaSolicitudIncompleta } from '../Modal/Contenidos/AdvertenciaSolicitudIncompleta';
import { AulaReservada } from '../Modal/Contenidos/AulaReservada';
import { ConfirmarReservaAula } from '../Modal/Contenidos/ConfirmarReservaAula';
import { ErrorReservaAula } from '../Modal/Contenidos/ErrorReservaAula';
import { ModalGenerico } from '../Modal/ModalGenerico';
import { DatosSolicitud } from './DatosSolicitud';

import './estilos-solicitud.css';
import { FilaTabla } from './FilaTabla';
import { Opciones } from './OpcionesSolicitud/Opciones';

export const Solicitud = () => {

    const {state:solicitud} = useLocation();
    
    //!Obteniendo la solicitud desde la bd
    const [solicitudRecuperada, setSolicitudRecuperada] = useState([]);
    const [dataAulas, setDataAulas] = useState({
        state: false,
        data: []
    })

    const { data, state } = dataAulas;

    const [dataReservas, setDataReservas] = useState({
        stateReserva: false,
        dataReserva: []
    })
    
    const { dataReserva, stateReserva } = dataReservas;

    //!hook para cambiar capacidad en la interfaz
    const [datosCapacidad, setdatosCapacidad] = useState({
        capacidadSoliRescatado: 0,
        capacidadAulaRescatado: 0,
        listaReservas: []
    })
    const { capacidadSoliRescatado, capacidadAulaRescatado, listaReservas } = datosCapacidad;

    const [capacidadSolicitud, setCapacidadSolicitud] = useState('0');

    const [aulasLibres, setAulasLibres] = useState([]);

    const [capOrignal, setCapOrignal] = useState(0);

    //! Hooks para modales
    const [isOpenModalConfirmReserva, opelModalReserva, closeModalReserva] = useModal(false);
    const [isOpenModalAlert, openModalAlert, closeModalAlert] = useModal(false);
    const [isOpenModalSuccess, openModalSuccess, closeModalSuccess] = useModal(false);
    const [isOpenModalFail, openModalFail, closeModalFail] = useModal(false);


    useEffect(() => {
        
        getSolicitudId(solicitud.id, setSolicitudRecuperada);
        
        getAulas( setDataAulas );
        getReserva( setDataReservas );
        
        
    }, []);
    
    useEffect(() => {
        
        setCapacidadSolicitud(solicitudRecuperada.cantidadEstudiantesAsignada);
        setCapOrignal(solicitudRecuperada.numeroEstudiantesSolicitud);
    }, [solicitudRecuperada]);
    
    
    useEffect(() => {
        
        generarAulasDisponibles(dataReserva, data, solicitud.horaInicioSolicitud, solicitud.fechaSolicitud, setAulasLibres)
        
    }, [state, stateReserva])
    
    const reservar = () => {

        const datosReserva = {
            ...listaReservas[0],
            idSolicitud: solicitud.id,
        }

        const datosEliminarAula = [listaReservas[0].idAula, aulasLibres, setAulasLibres]

        reservarAulas(datosReserva, openModalSuccess, openModalFail, datosEliminarAula);

    }

    const reducirCapacidad = () => {

        cambiarCapacidadSolicitud( capacidadSoliRescatado, capacidadAulaRescatado, setCapacidadSolicitud, solicitud);
        quitarAulaTabla(listaReservas[0].idAula, aulasLibres, setAulasLibres);

        //!Actualizando capacidad de peticion en solicitud
        reducirCapacidadSolicitud(solicitud, parseInt(solicitud.cantidadEstudiantesAsignada) + parseInt(capacidadAulaRescatado));
        
    }

    return (
        <div className='contenedor-solicitud animate__animated animate__fadeIn'>
            <div className='contenedor-parrafos-soli'>
                <DatosSolicitud item={ solicitud } capacidad={ capacidadSolicitud }/>
            </div>
            <hr/>
            <div className='contenedor-tabla-aulas-soli'>
                <section className='seccion-aulas-disponibles'>
                    {
                        ( aulasLibres.length > 0 && capacidadSolicitud < solicitud.numeroEstudiantesSolicitud )
                            ? (
                                <table className='tabla-aulas-soli'>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th className='col-solicitud'>Aula</th>
                                            <th className='col-solicitud'>Capacidad</th>
                                            <th className='col-solicitud'>Gestionar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <FilaTabla 
                                            data={aulasLibres} 
                                            fecha={ solicitud.fechaSolicitud } 
                                            hora={ solicitud.horaInicioSolicitud }
                                            periodo={ solicitud.periodoSolicitud }
                                            guardarDatos={ setdatosCapacidad }
                                            capacidadSoli={ capacidadSolicitud }
                                            modalReserva={ opelModalReserva }
                                            datosCapacidad={ datosCapacidad }
                                        />
                                    </tbody>
                                </table>
                            )
                            : ( capacidadSolicitud >= solicitud.numeroEstudiantesSolicitud )
                                ? <p className='parrafo-info-soli'>La solicitud ha sido atendida con éxito, puedes volver a la sección de solicitudes. </p>
                                : <p className='parrafo-info-soli'>No existen aulas disponibles para la solicitud, debes rechazar la solicitud.</p>
                    }
                </section>
            </div>
            {
                solicitudRecuperada != []
                ? <Opciones capacidad={ capacidadSolicitud } openModal={ openModalAlert } capacidadOriginal={ capOrignal } />
                : ''
            }
            <ModalGenerico isOpen={ isOpenModalConfirmReserva } closeModal={ closeModalReserva }>
                <ConfirmarReservaAula cerrarModal={ closeModalReserva } funcOk={ reservar }/>
            </ModalGenerico>
            <ModalGenerico isOpen={ isOpenModalAlert } closeModal={ closeModalAlert }>
                <AdvertenciaSolicitudIncompleta cerrarModal={ closeModalAlert }/>
            </ModalGenerico>
            <ModalGenerico isOpen={ isOpenModalSuccess } closeModal={ closeModalSuccess }>
                <AulaReservada cerrarModal={ closeModalSuccess } funcOk={ reducirCapacidad } />
            </ModalGenerico>
            <ModalGenerico isOpen={ isOpenModalFail } closeModal={ closeModalFail }>
                <ErrorReservaAula cerrarModal={ closeModalFail }/>
            </ModalGenerico>
        </div>
    )
}
