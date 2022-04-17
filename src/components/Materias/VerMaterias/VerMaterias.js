import React from 'react'

import ListaMaterias from '../../../data/ListaMaterias'
import { Materia } from './Materia'

export const VerMaterias = () => {
    return (
        <div className='contenedor-gral'>
            <div className='contenedor-elementos-lista'>
                <h2 className='titulo-ver-aulas'>Materias Registradas: {ListaMaterias.length}</h2>
                <hr/>
                {
                    ListaMaterias.map( (item) => (
                        <Materia elem={item}/>
                    ) )
                }
            </div>

        </div>
    )
}
