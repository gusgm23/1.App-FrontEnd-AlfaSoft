import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import ListaMaterias from '../../data/ListaMaterias'
import { useModal } from '../../hooks/useModal'
import { ModalGenerico } from '../Modal/ModalGenerico'

import './estilos-ver-grupos.css'
import { FormRegistroGrupo } from './RegistrarGrupo/FormRegistroGrupo'
import { TablaGrupos } from './TablaGrupos'

export const VerGrupos = () => {
    
    const [isOpenModalCreate, openModalCreate, closeModalCreate] = useModal(false);

    const [cambio, setCambio] = useState(false);

    return (
        <>
            <div className='contenedor-lista-grupos'>
                <div className='contenedor-elementos-lista'>
                    <div className='contenedor-titulo-componente-tabla'>
                        <h2>Grupos registrados para la materia: { ListaMaterias.length }</h2>
                        <div className='contenedor-btns-tabla-grupos'>
                            <button
                                className='btn-crear-grupo'
                                onClick={ openModalCreate }
                            >
                                Crear grupo
                            </button>
                            <button
                                className='btn-volver-grupo'
                            >
                                <NavLink exact='true' to='/vermaterias' >Volver</NavLink>
                            </button>
                        </div>
                    </div>
                    <hr/>
                    <TablaGrupos data={ListaMaterias} cambio={cambio} setCambio={setCambio}/>
                </div>
            </div>
            <ModalGenerico isOpen={ isOpenModalCreate } closeModal={ closeModalCreate }>
                <FormRegistroGrupo closeModalCreate={ closeModalCreate } setCambio={ setCambio } titulo='Registrar'/>
            </ModalGenerico>
        </>
    )
}
