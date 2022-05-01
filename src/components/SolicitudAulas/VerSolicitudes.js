import React, { useEffect, useState } from 'react'
import { getSolicitud } from '../../service/apiSolicitudAulas'
import Spinner from '../Spinner/Spinner'
import { Solicitudes } from './Solicitudes'
//import ListaSolicitudes from '../../data/ListaSolicitudes'

import './estilos-ver-soli.css'

export const VerSolicitudes = () => {
    const [ListaSolicitud, setListaSolicitud] = useState({
        state: false,
        data: []
    });

    const {state, data} = ListaSolicitud;

    useEffect(() => {
        getSolicitud(setListaSolicitud);
    }, [state]);

    return (
        <div className='contenedor-gral'>
            <div className='contenedor-elementos-lista'>
                <h2 className='titulo-ver-aulas' >Solicitudes Registradas </h2>
                <hr/>
                {
                    state ?
                    <Solicitudes data={data} />
                    : <Spinner/>
                }
            </div>

        </div>
    )

/*
    return (
        <div class="container-lg">
            <div class="row justify-content-md-center">
                    <div class="row row-cols-1">
                        <div class="col-center">
                            <div class="Titulo-Soli">
                                Lista de Solicitudes
                                </div>
                            </div>
                        <div class="col-center">
                            <div class="row justify-content-xl-center">
                                <div class="col col-auto-center">
                                    <div class="titulos-soli">
                                        Materia
                                    </div>
                                </div>
                                <div class="col col-auto-center">
                                    <div class="titulos-soli">
                                        Aula
                                    </div>
                                </div>
                                <div class="col col-auto-center">
                                    <div class="titulos-soli">
                                        Fecha de Solicitud
                                    </div>
                                </div>
                                <div class="col col-auto-center">
                                    <div class="titulos-soli">
                                        Detalle
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-center">
                            {
                                ListaSolicitudes.map( (item) => (
                                    <Solicitudes elem={item}/>
                                ) )
                            }
                        </div>
                    </div>
            </div>

        </div>
    )*/
}