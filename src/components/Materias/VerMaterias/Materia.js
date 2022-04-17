import React from 'react'
import { useModal } from '../../../hooks/useModal';
import { FormRegistroMateria } from '../../Modal/Contenidos/FormRegistroMateria';
import { ModalGenerico } from '../../Modal/ModalGenerico';

import './estilos-ver-materias.css'

export const Materia = ({elem}) => {

    const { id, codSis, materia, grupo } = elem;

    const [ isOpen, openModalEdition, closeModalEdition ] = useModal(false);

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
                            onClick={ openModalEdition }
                            >
                                Editar
                        </button>
                    </div>
                    <ModalGenerico isOpen={ isOpen } closeModal={closeModalEdition}>
                        <FormRegistroMateria codiSis={codSis} materi={materia} group={grupo} closeModal={closeModalEdition}/>
                    </ModalGenerico>
                </div>
    )
}
