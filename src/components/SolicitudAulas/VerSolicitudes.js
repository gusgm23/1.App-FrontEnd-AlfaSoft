import React, { useEffect, useState } from 'react'
import { getSolicitud,getSolicitudPendiente } from '../../service/apiSolicitudAulas'
import Spinner from '../Spinner/Spinner'
import { Solicitudes } from './Solicitudes'
import { useSortTable } from '../../hooks/usesort'
//import ListaSolicitudes from '../../data/ListaSolicitudes'

import './estilos-ver-soli.css'
import { getSolicitudesPendientes } from '../../helpers/filtrarSolicitudes'

export const VerSolicitudes = () => {
    const [ListaSolicitud, setListaSolicitud, sort] = useSortTable(useState({
        stateS: false,
        dataS: []
    }),
    'fechaSolicitud'
    )

    const {stateS, dataS} = ListaSolicitud;
    
    const [listaSolicitudesPendientes, setSolicitudesPendientes] = useState([]);

    useEffect(() => {
        getSolicitud(setListaSolicitud);
    }, [stateS]);

    useEffect(() => {
        getSolicitudesPendientes(dataS, setSolicitudesPendientes);
    }, [dataS]);
    

    return (
        <div className='contenedor-gral animate__animated animate__fadeIn'>
            <div className='contenedor-elementos-lista'>
                <h2 className='titulo-ver-soli' >Solicitudes Pendientes: {listaSolicitudesPendientes.length}</h2>
                

                <hr/>
                {
                    stateS && listaSolicitudesPendientes.length > 0 ?
                    <Solicitudes data={listaSolicitudesPendientes} />
                    : <Spinner/>
                }
            </div>

        </div>
    )
}