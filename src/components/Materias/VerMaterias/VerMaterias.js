import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
    }, [state]);

    const navigate = useNavigate();

    const navegarRegistroMateria = () => {

        navigate('/admin/registromateria')

    }

    return (
        <div className='contenedor-gral animate__animated animate__fadeIn'>
            <div className='contenedor-elementos-lista'>
                <div className='contenedor-titulo-ver-materias'>
                    <h2 className='titulo-ver-aulas'>Materias Registradas: {data.length}</h2>
                    <button 
                        className='btn-crear-materia'
                        onClick={ navegarRegistroMateria }
                    >
                        <i className="bi bi-plus-square-fill"></i>
                    </button>
                </div>
                <hr/>
                {
                    state ?
                    <Materia data={data} setListaMateria={setListaMateria} />
                    : <Spinner/>
                }
            </div>

        </div>
    )
}
