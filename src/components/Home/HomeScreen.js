import React from 'react'

import homeImg from '../../images/collaboration.svg'

import './estilos-home.css'

export const HomeScreen = () => {
    return (
        <>
            <h2 className='titulo-home animate__animated animate__fadeIn'>Sistema de Reserva de Aulas</h2>
            <hr/>
            <div className='contenedor-seccion-home'>
                <section>
                    <div className='contenido-home'>
                        <p className='parrafo-home animate__animated animate__fadeIn'>El sistema de asignación de aulas es un sistema que tiene objetivo de poder ayudar a los docentes como también a los auxiliares de la facultad de Ciencias y Tecnología de la universidad Mayor de San Simón a poder realizar la reserva de aulas para que puedan tomar evaluaciones.</p>
                        <img className='imgHome animate__animated animate__fadeIn' src={homeImg}/>
                    </div>
                </section>
            </div>
        </>
    )
}
