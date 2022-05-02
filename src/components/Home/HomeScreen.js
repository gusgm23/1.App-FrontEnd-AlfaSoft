import React from 'react'

import homeImg from '../../images/collaboration.svg'

import './estilos-home.css'

export const HomeScreen = () => {
    return (
        <>
            <h2 className='titulo-home'>Sistema de Asignación de Aulas</h2>
            <hr/>
            <div className='contenido-home'>
                <p className='parrafo-home'>El sistema de asignación de aulas es un sistema que tiene objetivo de poder ayudar a los docentes como también a los auxiliares de la facultad de Ciencias y Tecnología de la universidad Mayor de San Simón a poder realizar la reserva de aulas para que puedan tomar evaluaciones.</p>
                <img src={homeImg}/>
            </div>
        </>
    )
}
