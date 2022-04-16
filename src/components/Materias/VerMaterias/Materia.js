import React from 'react'

import './estilos-ver-materias.css'

export const Materia = ({elem}) => {

    const { id, codSis, materia, grupo } = elem;
    console.log(elem)

    return (
        <div className='contenedor-datos-aula'>
                    <div className='caja-sis'>
                        <label>Código SIS: {codSis}</label>
                    </div>
                    <div className='caja-materia'>
                        Materia: {materia}
                    </div>
                    <div className='caja-grupo'>
                        <label>Grupo: {grupo}</label>
                    </div>
                    <div className='caja-btn-editar'>
                        <button 
                            className='btn-editar'
                            // onClick={openModal}
                            >
                                Editar
                        </button>
                    </div>
                </div>
    )
}
