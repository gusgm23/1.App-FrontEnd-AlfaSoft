import React from 'react'
import { Aula } from './Aula'
import Aulas from '../../../data/Aulas'

import './estilos-ver-aulas.css'

export const VistaAulas = () => {

    return (
        <div className='contenedor-gral'>
            <div className='contenedor-elementos-lista'>
                <h2 className='titulo-ver-aulas'>Aulas Registradas: {Aulas.length}</h2>
                <hr/>
                {
                    Aulas.map( (item) => (
                        <Aula elem={item} key={item.id}/>
                    ) )
                }
            </div>

        </div>
    )
}
