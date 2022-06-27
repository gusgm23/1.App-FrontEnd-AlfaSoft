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

    const [reservedClassRoom, setReservedClassRoom] = useState({});
    const {user} = useContext(AuthContext);


    //!Bloque encargado de almacenar solicitudes aprobadas que pertenezcan al usuario que ha iniciado sesión
    const [solicitudesAprobadas, setSolicitudesAprobadas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const { dataAprob, stateAprob } = solicitudesAprobadas;

    const [listaReservas, setListaReservas] = useState(
        {
            stateReserva: false,
        dataReserva: []
    })

    const [listaAulas, setListaAulas] = useState(
        {
            state: false,
            data: []
        }
    )

    useEffect(() => {
        const config = {
            nombreDocenteSolicitud: user.name,
            apellidoDocenteSolicitud: user.apellido,
            estadoSolicitud: classroomRequestStatus.ACCEPTED,
          };
      
          getSolicitudByDocent(config).then((resp) => {
            setSolicitudesAprobadas(resp.data);
            setIsLoading(false)
          });

          getReserva(setListaReservas);
          getAulas(setListaAulas);
    }, [])

    useEffect(() => {
        const reservaUsuarioSol = obtenerReservasDeUsuario(listaReservas.dataReserva, '1', listaAulas.data)
        console.log(reservaUsuarioSol)
    })


    
    function showReservedClassroom(reservedClassRoom){
        openModalEdicion();
        setReservedClassRoom(reservedClassRoom);
    }



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
                                        showReservedClassroom={showReservedClassroom}
                                        openModalEdicion={openModalEdicion}
                                        listaSoliAprob={ solicitudesAprobadas }/>
                                </table>
                            )
                            : <p className='parraf-soli-aprob'>No tienes solicitudes que hayan sido aprobadas.</p>
                            : <Spinner />
                        }
                </div>
            </section>
        </div>
        <ModalGenerico isOpen={isOpen} closeModal={closeModalEdicion}>
            <AulaReservada reservedClassRoom={reservedClassRoom}>
                
            </AulaReservada>
      </ModalGenerico>
    </>
    )
}
