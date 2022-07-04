import React from 'react'
import { ColumnaTabla } from './ColumnaTabla';
import { FilaTabla } from './FilaTabla'

const listaTitulos = ['#', 'Aula', 'Capacidad', 'Gestionar'];

export const TodasLasAulas = ({ aulasLibres, capacidadSolicitud, solicitud, setdatosCapacidad, opelModalReserva, datosCapacidad }) => {
    
    const listaOrdenada = aulasLibres.sort((a, b) => {

        const numA = parseInt(a.capacidadAula);
        const numB = parseInt(b.capacidadAula);

        if ( numA < numB )
            return -1;
        if ( numA > numB )
            return 1;
        return 0;
    });

    return (
        <div className='contenedor-tabla-aulas'>
            <h3>Todas las aulas disponibles: {aulasLibres.length}</h3>
            {
                ( aulasLibres.length > 0 && capacidadSolicitud < solicitud.numeroEstudiantesSolicitud )
                    ? (
                        <table className='tabla-aulas-soli'>
                            <ColumnaTabla listaTitulos={listaTitulos}/>
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
        </div>
    )
}
