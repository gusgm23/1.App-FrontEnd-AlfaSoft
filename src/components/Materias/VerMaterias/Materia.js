import React from 'react'
import { useModal } from '../../../hooks/useModal';
import { FormRegistroMateria } from '../RegistroMateria/FormRegistroMateria';
import { ModalGenerico } from '../../Modal/ModalGenerico';

import './estilos-ver-materias.css'

export const Materia = ({elem}) => {

    const { id, nombreMateria, grupoMateria, codigoMateria } = elem;

    const [ isOpen, openModalEdition, closeModalEdition ] = useModal(false);

    return (
        <div className='contenedor-datos-aula'>
                    <div className='caja-sis'>
                        <label>Código SIS: {codigoMateria}</label>
                    </div>
                    <div className='caja-materia'>
                        Materia: {nombreMateria}
                    </div>
                    <div className='caja-grupo'>
                        <label>Grupo: {grupoMateria}</label>
                    </div>
                    <div className='caja-btn-editar'>
                        <button 
                            className='btn-editar'
                            onClick={ openModalEdition }
                            >
                                Editar
                        </button>
                    </div>
                    <ModalGenerico isOpen={ isOpen } closeModal={closeModalEdition}>
                        <FormRegistroMateria codiSis={codigoMateria} materi={nombreMateria} group={grupoMateria} closeModal={closeModalEdition}/>
                    </ModalGenerico>
                </div>
    )
}
