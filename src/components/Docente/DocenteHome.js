import React, { useContext } from 'react';
import { AuthContext } from '../../auth/authContext';

import homeImg from '../../images/home.svg'

import './estilos-home-docente.css';

export const DocenteHome = () => {
    
    const { user } = useContext(AuthContext);
    
    return (
        <div className='contenedor-home-docente animate__animated animate__fadeIn'>
            <div className='contenedor-titulo-home-docente'>
                <h5>
                    ¡Hola, {user.name} {user.apellido}!
                </h5>
                <hr/>
            </div>
            <section>
                <div className='contenido-home-docente'>
                    <div>
                        <p className='parrafo-home-docente'>
                            Para reservar un aula dirigite a <b>Crear Solicitud.</b>
                        </p>
                    </div>
                    <img src={homeImg} alt='image-home'/>
                </div>
            </section>
        </div>
    )
}
