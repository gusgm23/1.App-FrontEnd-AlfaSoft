import React, { useEffect, useState } from 'react'
import { getSolicitud } from '../../service/apiSolicitudAulas'
import Spinner from '../Spinner/Spinner'
import { Solicitudes } from './Solicitudes'
import { useSortTable } from '../../hooks/usesort'
//import ListaSolicitudes from '../../data/ListaSolicitudes'

import './estilos-ver-soli.css'

export const VerSolicitudes = () => {
    const [ListaSolicitud, setListaSolicitud, sort] = useSortTable(useState({
        state: false,
        data: []
    }),
    'fechaSolicitud'
    )

    const {state, data} = ListaSolicitud;

    useEffect(() => {
        getSolicitud(setListaSolicitud);
    }, [state]);

    return (
        <div className='contenedor-gral'>
            <div className='contenedor-elementos-lista'>
                <h2 className='titulo-ver-soli' >Solicitudes Registradas </h2>
                

                <hr/>
                {
                    state ?
                    <Solicitudes data={data} />
                    : <Spinner/>
                }
            </div>

        </div>
    )
}