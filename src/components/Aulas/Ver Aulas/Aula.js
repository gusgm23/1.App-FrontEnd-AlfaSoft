import React from 'react'

import { useModal } from '../../../hooks/useModal';
import { ModalEjm } from '../../Modal/ModalEjm';
import { ModalGenerico } from '../../Modal/ModalGenerico';
import { FormRegistroAula } from '../RegistroAulas/FormRegistroAula';

export const Aula = ({elem}) => {

    const {id, aula, capacidad, estado} = elem;

    const handleClick = () =>{
        console.log(id);
    }

    const [isOpenModalEdicion, openModalEdicion, closeModalEdicion] = useModal(false);

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
                            onClick={openModalEdicion}
                            >
                                Editar
                        </button>
                        {/* <ModalEjm 
                            isOpen={isOpenModal} 
                            closeModal={closeModal}
                            aula={aula}
                            capacidad={capacidad}
                        /> */}
                    </div>
                    <ModalGenerico isOpen={isOpenModalEdicion} closeModal={closeModalEdicion}>
                        <FormRegistroAula aulaEdi={aula} cap={capacidad} estado={estado} closeModal={closeModalEdicion}/>
                    </ModalGenerico>
                </div>
    )
}
