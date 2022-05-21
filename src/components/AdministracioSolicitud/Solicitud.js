import React, { useEffect, useState } from 'react';
import { listaAulas } from '../../data/ListaAulas';
import { listaReservas } from '../../data/ListaReservas';
import { verificarCapacidad } from '../../helpers/capacidadAulasLibres';
import { generarAulasDisponibles } from '../../helpers/generarAulasDisponibles';
import { getAulas } from '../../service/apiAulas';
import { getReserva } from '../../service/apiReservaAulas';
import { DatosSolicitud } from './DatosSolicitud';

import './estilos-solicitud.css';
import { FilaTabla } from './FilaTabla';
import { Opciones } from './OpcionesSolicitud/Opciones';

const item = {
    id: 1,
    nombreDocenteSolicitud: "Carla",
    apellidoDocenteSolicitud: "Salazar",
    numeroEstudiantesSolicitud: "40",
    motivoSolicitud: "Examen de primer parcial",
    fechaSolicitud: "2022-05-04",
    horaInicioSolicitud: "12:45",
    horaFinSolicitud: "14:15",
    periodoSolicitud: "1 periodo",
    estadoSolicitud: "pendiente",
    materia_id: 1
}

export const Solicitud = () => {
    
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

    const [aulasLibres, setAulasLibres] = useState([]);


    useEffect(() => {
        
        getAulas( setDataAulas );
        getReserva( setDataReservas );
        
    }, []);
    
    useEffect(() => {
        
        generarAulasDisponibles(dataReserva, data, item.horaInicioSolicitud, item.fechaSolicitud, setAulasLibres)
        
    }, [state, stateReserva])
    
    useEffect(() => {
        
        
    }, [])
    
    
    
    
    return (
        <div className='contenedor-solicitud animate__animated animate__fadeIn'>
            <div className='contenedor-parrafos-soli'>
                <DatosSolicitud item={ item }/>
            </div>
            <hr/>
            <div className='contenedor-tabla-aulas-soli'>
                <section className='seccion-aulas-disponibles'>
                    {
                        ( aulasLibres.length > 0 )
                            ? (
                                <table className='tabla-aulas-soli'>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Aula</th>
                                            <th>Capacidad</th>
                                            <th>Estado</th>
                                            <th>Gestionar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <FilaTabla 
                                            data={aulasLibres} 
                                            fecha={ item.fechaSolicitud } 
                                            hora={ item.horaInicioSolicitud }
                                            periodo={ item.periodoSolicitud }
                                        />
                                    </tbody>
                                </table>
                            )
                            : <p className='parrafo-info-soli'>No existen aulas disponibles para la solicitud. <b>Rechazar Solicitud</b></p>
                    }
                </section>
            </div>
            <Opciones/>
        </div>
    )
}
