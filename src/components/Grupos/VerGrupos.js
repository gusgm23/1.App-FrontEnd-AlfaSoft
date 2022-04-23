import React from 'react'

import ListaMaterias from '../../data/ListaMaterias'
import { useModal } from '../../hooks/useModal'
import { ModalGenerico } from '../Modal/ModalGenerico'

import './estilos-ver-grupos.css'
import { FormRegistroGrupo } from './RegistrarGrupo/FormRegistroGrupo'
import { TablaGrupos } from './TablaGrupos'

export const VerGrupos = () => {
    
    const [isOpenModalCreate, openModalCreate, closeModalCreate] = useModal(false);

    return (
        <>
            <div className='contenedor-lista-grupos'>
                <div className='contenedor-elementos-lista'>
                    <div className='contenedor-titulo-componente-tabla'>
                        <h2>Grupos registrados para la materia: { ListaMaterias.length }</h2>
                        <button
                            className='btn-crear-grupo'
                            onClick={ openModalCreate }
                        >
                            Crear grupo
                        </button>
                    </div>
                    <hr/>
                    <TablaGrupos data={ListaMaterias}/>
                </div>
            </div>
            <ModalGenerico isOpen={ isOpenModalCreate } closeModal={ closeModalCreate }>
                <FormRegistroGrupo closeModalCreate={ closeModalCreate }/>
            </ModalGenerico>
        </>
    )
}
