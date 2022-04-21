import React, { useEffect, useState } from 'react'

import ListaMaterias from '../../../data/ListaMaterias'
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
    

    

    return (
        <div className='contenedor-gral'>
            <div className='contenedor-elementos-lista'>
                <h2 className='titulo-ver-aulas'>Materias Registradas: {ListaMaterias.length}</h2>
                <hr/>
                {
                    state ?
                    data.map( (item) => (
                        <Materia elem={item} key={item.id}/>
                    ) )
                    : <Spinner/>
                }
            </div>

        </div>
    )
}
