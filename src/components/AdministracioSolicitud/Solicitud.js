import React, { useState } from 'react';
import { DatosSolicitud } from './DatosSolicitud';

import './estilos-solicitud.css';

const item = {
    id: 1,
    nombreDocenteSolicitud: "Carla",
    apellidoDocenteSolicitud: "Salazar",
    numeroEstudiantesSolicitud: "40",
    motivoSolicitud: "Examen de primer parcial",
    fechaSolicitud: "22/04/2022",
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

    const { data } = dataAulas;
    
    return (
        <div className='contenedor-solicitud animate__animated animate__fadeIn'>
            <div className='contenedor-parrafos-soli'>
                <DatosSolicitud item={ item }/>
            </div>
            <hr/>
            <div className='contenedor-tabla-aulas-soli'>
                <section className='seccion-aulas-disponibles'>
                    <table className='tabla-aulas-soli'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Aula</th>
                                <th>Capacidad</th>
                                <th>Gestionar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>690C</td>
                                <td>35</td>
                                <td>
                                    <button className='btn-reserva'> Reservar </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    )
}
