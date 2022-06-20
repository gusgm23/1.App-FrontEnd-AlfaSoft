import React, { useContext } from 'react';
import { AuthContext } from '../../auth/authContext';

import homeImg from '../../images/home.svg'

import './estilos-home-docente.css';

export const DocenteHome = () => {
    
    const { user } = useContext(AuthContext);
    
    return (
        <div className='contenedor-home-docente animate__animated animate__fadeIn'>
            <div className='contenedor-titulo-home-docente'>
                <h2>
                    ¡Hola, {user.name} {user.apellido}!
                </h2>
                <hr/>
            </div>
            <section>
                <div className='contenido-home-docente'>
                    <div>
                        <p className='parrafo-home-docente'>
                            Recuerda que puedes ver el historial de todas las solicitudes que registraste dentro del sistema, crear una nueva solicitud y editar aquellas solicitudes en la seccion de <b>solicitudes pendientes</b>.
                        </p>
                           <p>
                             Tambien puedes ver las solicitudes que fueron rechazadas en la sección: <b>Solicitudes Rechazadas.</b>
                            </p>
                           <p>
                             Tambien puedes ver las solicitudes que fueron Aceptadas en la sección: <b>Solicitudes Aceptadas.</b>
                            </p>
                    </div>
                    <img src={homeImg} alt='image-home'/>
                </div>
            </section>
        </div>
    )
}
