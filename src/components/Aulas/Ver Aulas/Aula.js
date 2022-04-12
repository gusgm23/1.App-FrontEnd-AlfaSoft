import React from 'react'
import { NavLink } from 'react-router-dom'
import { ModalEjm } from '../../Modal/ModalEjm';
import { useModal } from '../../Modal/useModal';

export const Aula = ({elem}) => {

    const {id, aula, capacidad, estado} = elem;

    const handleClick = () =>{
        console.log(id);
    }

    const [isOpenModal, openModal, closeModal] = useModal(false);

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
                            onClick={openModal}
                            >
                                Editar
                        </button>
                        <ModalEjm 
                            isOpen={isOpenModal} 
                            closeModal={closeModal}
                            aula={aula}
                            capacidad={capacidad}
                        />
                    </div>
                </div>
    )
}
