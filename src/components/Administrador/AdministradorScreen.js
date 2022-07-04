import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../auth/authContext';

import './estilos-home-admin.css'

import homeImg from '../../images/home.svg'
import { getSolicitudPendiente } from '../../service/apiSolicitudAulas';

export const AdministradorScreen = () => {
    
    const { user } = useContext(AuthContext);

    const [solicitudesPendientes, setSolicitudesPendientes] = useState({
        state: false,
        data : []
    })

    const { data } = solicitudesPendientes;

    useEffect(() => {
        
        getSolicitudPendiente(setSolicitudesPendientes);

    }, [])

    return (
        <div className='contenedor-home-admin animate__animated animate__fadeIn'>
            <h2>¡Hola, {user.name} {user.apellido}!</h2>
            <hr/>
            <div className='contenedor-info-admin'>
                <section>
                    <div>
                        <div>
                           
                        </div>
                        <div className='contenedor-img-home-admin'>
                            <img className='img-home-admin' src={ homeImg } alt='home img'/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
