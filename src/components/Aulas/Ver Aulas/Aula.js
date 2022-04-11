import React from 'react'

export const Aula = ({elem}) => {

    const {id, aula, capacidad, estado} = elem;

    const handleClick = () =>{
        console.log(id);
    }

    return (
        <div className='contenedor-datos-aula'>
                    <div className='caja-pequeña'>
                        <label>Aula: {aula}</label>
                    </div>
                    <div className='caja-campos'>
                        <label>Capacidad: {capacidad} Estudiantes</label>
                    </div>
                    <div className='caja-pequeña'>
                        <label>Estado: {estado}</label>
                    </div>
                    <div className='caja-pequeña'>
                        <button 
                            className='btn-editar'
                            onClick={handleClick}
                            >
                                Editar
                        </button>
                    </div>
                </div>
    )
}
