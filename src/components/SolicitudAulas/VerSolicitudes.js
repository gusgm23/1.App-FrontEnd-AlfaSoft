import React, { useEffect, useState } from 'react'
import { getSolicitud,getSolicitudPendiente } from '../../service/apiSolicitudAulas'
import Spinner from '../Spinner/Spinner'
import { Solicitudes } from './Solicitudes'
import { useSortTable } from '../../hooks/usesort'
//import ListaSolicitudes from '../../data/ListaSolicitudes'

import './estilos-ver-soli.css'

export const VerSolicitudes = () => {
    const [ListaSolicitud, setListaSolicitud, sort] = useSortTable(useState({
        stateS: false,
        dataS: []
    }),
    'fechaSolicitud'
    )

    const {stateS, dataS} = ListaSolicitud;

    useEffect(() => {
        getSolicitud(setListaSolicitud);
    }, [stateS]);

    return (
        <div className='contenedor-gral animate__animated animate__fadeIn'>
            <div className='contenedor-elementos-lista'>
                <h2 className='titulo-ver-soli' >Solicitudes Registradas</h2>
                

                <hr/>
                {
                    stateS ?
                    <Solicitudes data={dataS} />
                    : <Spinner/>
                }
            </div>

        </div>
    )
}