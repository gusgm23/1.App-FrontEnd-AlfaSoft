import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../auth/authContext';
import { getSolicitudesAprobadasDeUsuario } from '../../../helpers/obtenerSolicitudesDeUsuario';
import { getSolicitud } from '../../../service/apiSolicitudAulas';
import Spinner from '../../Spinner/Spinner';
import { ColumnasTabla } from './ColumnasTabla';

import  './estilos-solicitudes-aprobadas.css';
import { FilaTabla } from './FilaTabla';

const columnas = ['#', 'Motivo', 'Materia','Fecha', 'Hora', 'Estado', 'Aula(s)'];

export const SolicitudesAprobadas = () => {
    
    const {user} = useContext(AuthContext);

    const [listaSolicitudes, setListaSolicitudes] = useState({
        stateS:false,
        dataS:[]
    })
    const { dataS, stateS } = listaSolicitudes;

    //!Bloque encargado de almacenar solicitudes aprobadas que pertenezcan al usuario que ha iniciado sesión
    const [solicitudesAprobadas, setSolicitudesAprobadas] = useState({
        stateAprob:false,
        dataAprob:[]
    })
    const { dataAprob, stateAprob } = solicitudesAprobadas;

    useEffect(() => {
        getSolicitud(setListaSolicitudes);
    }, [])

    useEffect(() => {
        if( stateS ){
            setSolicitudesAprobadas({
                stateAprob:true,
                dataAprob: getSolicitudesAprobadasDeUsuario( dataS, user.name, user.apellido )
            })
        }
    }, [stateS])
    
    

    return (
        <div className='cont-gral-soli-aprob'>
            <section className='section-soli-aprob'>
                <div className='cont-titulo-soli-aprob'>
                    <h2>Solicitudes aprobadas: {dataAprob.length}</h2>
                    <hr/>
                </div>
                <div className='cont-tabla-soli-aprb'>
                    {
                        stateAprob ?
                            dataAprob.length > 0 ?
                            (
                                <table>
                                    <ColumnasTabla columnas={ columnas }/>
                                    <FilaTabla listaSoliAprob={ dataAprob }/>
                                </table>
                            )
                            : <p className='parraf-soli-aprob'>No tienes solicitudes que hayan sido aprobadas.</p>
                        : <Spinner />
                    }
                </div>
            </section>
        </div>
    )
}
