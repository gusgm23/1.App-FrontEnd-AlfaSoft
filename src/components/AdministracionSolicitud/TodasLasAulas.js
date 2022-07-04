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
            <h4>Todas las aulas disponibles: {aulasLibres.length}</h4>
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
        </div>
    )
}
