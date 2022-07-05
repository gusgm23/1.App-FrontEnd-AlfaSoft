import React, { useEffect, useState } from 'react'
import { obtenerAulasSugeridas } from '../../helpers/aulasSugeridas';
import { ColumnaTabla } from './ColumnaTabla';
import { FilaTabla } from './FilaTabla'

const listaTitulos = ['#', 'Aula', 'Capacidad', 'Gestionar'];

export const AulasSugeridas = ({ data, solicitud, capacidadSolicitud, opelModalReserva, datosCapacidad, setdatosCapacidad }) => {

    const [listaAulasSugeridas, setListaAulasSugeridas] = useState(data)

    //!Hook para controlar cuando no existen aulas para recomendar, para posteriormente mostrar un mensaje informandolo
    const [existeSugerencias, setExisteSugerencias] = useState(true);

    useEffect(() => {
        setListaAulasSugeridas(obtenerAulasSugeridas(data, solicitud, setExisteSugerencias));
    }, [data])
    

    const listaOrdenada = listaAulasSugeridas.sort((a, b) => {

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
            <h4>Aulas recomendadas para la solicitud: { listaOrdenada.length }</h4>
            {
                !existeSugerencias ?
                <p className='parrafo-info-soli'>No existen aulas disponibles con la capacidad que requiere la solicitud, debes asignar alguna de las aulas libres.</p>
                : 
                    <table className='tabla-aulas-soli'>
                        <ColumnaTabla listaTitulos={listaTitulos}/>
                        <tbody>
                            <FilaTabla 
                                data={listaOrdenada} 
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
            }
        </div>
    )
}
