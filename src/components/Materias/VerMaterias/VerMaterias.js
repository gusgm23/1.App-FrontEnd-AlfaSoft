import React, { useEffect, useState } from 'react'

import { getMateria } from '../../../service/apiMateria'
import Spinner from '../../Spinner/Spinner'
import { Materia } from './Materia'

export const VerMaterias = () => {

    const [listaMateria, setListaMateria] = useState({
        state: false,
        data: []
    });

    const {state, data} = listaMateria;

    useEffect(() => {
        getMateria(setListaMateria);
    }, [state])
    

    const holi = () => {
        console.log('probando')
    }

    return (
        <div className='contenedor-gral'>
            <div className='contenedor-elementos-lista'>
                <h2 className='titulo-ver-aulas'>Materias Registradas: {data.length}</h2>
                <hr/>
                {
                    state ?
                    <Materia data={data}/>
                    : <Spinner/>
                }
            </div>

        </div>
    )
}
