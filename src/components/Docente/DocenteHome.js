import React, { useContext } from 'react';
import { AuthContext } from '../../auth/authContext';

import homeImg from '../../images/home.svg'

import './estilos-home-docente.css';

export const DocenteHome = () => {
    
    const { user, dispatch } = useContext(AuthContext);
    
    return (
        <div className='contenedor-home-docente'>
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
                            Recuerda que puedes registrar tu solicitud para poder reservar un aula en la sección: <b>Registrar Solicitud.</b>
                        </p>
                        <p className='parrafo-home-docente'>
                            También puedes ver el historial de todas las solicitudes que registrasde dentro del sistema en la sección: <b>Ver Solicitudes.</b>
                        </p>
                    </div>
                    <img src={homeImg} alt='image-home'/>
                </div>
            </section>
        </div>
    )
}
