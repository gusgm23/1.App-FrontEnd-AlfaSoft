import React, { useContext } from 'react'
import { AuthContext } from '../../auth/authContext';

import './estilos-home-admin.css'

import homeImg from '../../images/home.svg'

export const AdministradorScreen = () => {
    
    const { user } = useContext(AuthContext);

    return (
        <div className='contenedor-home-admin'>
            <h2>¡Hola, {user.name} {user.apellido}!</h2>
            <hr/>
            <div className='contenedor-info-admin'>
                <section>
                    <div>
                        <div>
                            <p>¡Atención! Tienes <b>20</b> solicitudes de reserva de aulas pendientes! Dirígete a la sección <b>Solicitudes</b> para poder atenderlas!</p>
                            <hr/>
                            <p>Para poder ver las aulas disponibles en la plataforma, debes dirigirte a la sección <b>Aulas.</b></p>
                            <p>Si deseas ver las materias y sus respectivos grupos disponibles en la plataforma, debes dirigirte a la sección <b>Materias.</b></p>
                            <p>Para poder registrar una nueva materia, debes dirigirte a la sección <b>Registrar Materia.</b></p>
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
