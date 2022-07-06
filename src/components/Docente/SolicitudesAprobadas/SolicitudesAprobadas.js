import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../auth/authContext';
import { classroomRequestStatus } from '../../../enums/solicitudes';
import { obtenerReservasDeUsuario } from '../../../helpers/obtenciondeReservas';
import { getSolicitudesAprobadasDeUsuario } from '../../../helpers/obtenerSolicitudesDeUsuario';
import { useModal } from '../../../hooks/useModal';
import { getAulas } from '../../../service/apiAulas';
import { getReserva } from '../../../service/apiReservaAulas';
import { getSolicitud, getSolicitudByDocent } from '../../../service/apiSolicitudAulas';
import { ModalGenerico } from '../../Modal/ModalGenerico';
import Spinner from '../../Spinner/Spinner';
import { AulaReservada } from './AulaReservada';
import { ColumnasTabla } from './ColumnasTabla';

import  './estilos-solicitudes-aprobadas.css';
import { FilaTabla } from './FilaTabla';

const columnas = ['#', 'Motivo', 'Materia','Fecha', 'Hora', 'Estado', 'Aula(s)'];

export const SolicitudesAprobadas = () => {
    const [isOpen, openModalEdicion, closeModalEdicion] = useModal(false);

    const {user} = useContext(AuthContext);


    //!Bloque encargado de almacenar solicitudes aprobadas que pertenezcan al usuario que ha iniciado sesión
    const [solicitudesAprobadas, setSolicitudesAprobadas] = useState([]);
    const [isLoading, setisLoading] = useState('')

    const [listaReservas, setListaReservas] = useState({
        stateReserva: false,
        dataReserva: []
    })

    const [listaAulas, setListaAulas] = useState({
            state: false,
            data: []
        }
    )

    const [listaSolicitudes, setListaSolicitudes] = useState({
        stateS: false,
        dataS: []
    })

    const [reservasDeSolicitud, setReservasDeSolicitud] = useState([]);
    console.log("🚀 ~ file: SolicitudesAprobadas.js ~ line 47 ~ SolicitudesAprobadas ~ reservasDeSolicitud", reservasDeSolicitud)

    useEffect(() => {
        getSolicitud(setListaSolicitudes);
        getReserva(setListaReservas);
        getAulas(setListaAulas);
    }, [])

    useEffect(() => {
        
        if(listaSolicitudes.stateS){
            setSolicitudesAprobadas(getSolicitudesAprobadasDeUsuario(listaSolicitudes.dataS, user.name, user.apellido));
        }

    }, [listaSolicitudes.dataS])

    return (
        <>
        <div className='solicitud-aceptada-content'>
            <section className='section-soli-aprob'>
                
                <div className='cont-titulo-soli-aprob animate__animated animate__fadeIn'>
                    <h2>Solicitudes aprobadas: {!isLoading&& solicitudesAprobadas.length}</h2>
                    <hr/>
                </div>
                <div className='cont-tabla-soli-aprb'>
                    {
                        !isLoading ?
                        solicitudesAprobadas.length > 0 ?
                        (
                                <table className='animate__animated animate__fadeIn'>
                                    <ColumnasTabla columnas={ columnas }/>
                                    <FilaTabla
                                        listaSoliAprob={ solicitudesAprobadas }
                                        setListaReservas= { setReservasDeSolicitud }
                                        listaReservas={ listaReservas.dataReserva }
                                        listaAulas={ listaAulas.data }
                                        showModal={ openModalEdicion }
                                    />
                                </table>
                            )
                            : <p className='parraf-soli-aprob'>No tienes solicitudes que hayan sido aprobadas.</p>
                            : <Spinner />
                        }
                </div>
            </section>
        </div>
        <ModalGenerico isOpen={isOpen} closeModal={closeModalEdicion}>
            {
                reservasDeSolicitud.length > 0 ?
                <AulaReservada listaReservas={reservasDeSolicitud} closeModal={closeModalEdicion}/>
                :''
            }
        </ModalGenerico>
    </>
    )
}
