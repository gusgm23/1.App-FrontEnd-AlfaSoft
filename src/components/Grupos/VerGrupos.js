import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import ListaMaterias from '../../data/ListaMaterias'
import { filtrarGrupos } from '../../helpers/filtrarGrupos'
import { useModal } from '../../hooks/useModal'
import { getGrupoMateria } from '../../service/apiGrupoMaterias'
import { ModalGenerico } from '../Modal/ModalGenerico'

import './estilos-ver-grupos.css'
import { FormRegistroGrupo } from './RegistrarGrupo/FormRegistroGrupo'

export const VerGrupos = () => {
    
    const [isOpenModalCreate, openModalCreate, closeModalCreate] = useModal(false);
    const[isOpenModalEdition, openModalEdition, closeModalEdition] = useModal(false);

    const [listaMat, setListaMat] = useState({
        state: false,
        data: []
    });

    const [datos, setDatos] = useState({
        id: '',
        grupo: ''
    })

    const [grupoEditar, setGrupoEditar] = useState({
        idGrupo:'',
        nombreGrupo:'',
        estadoGrupo:''
    })

    const [dataLimpia, setDataLimpia] = useState([]);

    const materiaID = localStorage.getItem("id");

    const { states, datas } = listaMat;
    const { id, grupo } = datos;
    const { idGrupo, nombreGrupo, estadoGrupo } = grupoEditar;

    useEffect(() => {

        if( datas != [] ){
            getGrupoMateria(setListaMat);
            filtrarGrupos(datas,materiaID, setDataLimpia);
        }
    }, [states]);

    const editar = (idEditar, nombreGrupoEditar, estadoGrupoEditar) => {
        setGrupoEditar({
            idGrupo: idEditar,
            nombreGrupo: nombreGrupoEditar,
            estadoGrupo: estadoGrupoEditar
        });

        openModalEdition();
    }

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
                    <div className='contenedor-tabla'>
                        <table>
                            <thead>
                                <tr className='titulo-tabla'>
                                    <th>#</th>
                                    <th>Grupo</th>
                                    <th>Estado</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dataLimpia.map( (item, i) => (
                                        <tr key={ item.id }>
                                            <td className='col-id'>{i+1}</td>
                                            <td className='col-grupo'>{ item.grupoMateria }</td>
                                            <td> { item.estadoGrupoMateria } </td>
                                            <td className='td-btns'>
                                                <section className='caja-btns'>
                                                    <button 
                                                        className='btn-editar editar-grupo'
                                                        onClick={ () => ( editar(item.id, item.grupoMateria, item.estadoGrupoMateria) ) }
                                                    >
                                                        Editar
                                                    </button>
                                                </section>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
            <ModalGenerico isOpen={ isOpenModalCreate } closeModal={ closeModalCreate }>
                <FormRegistroGrupo 
                    closeModalCreate={ closeModalCreate } 
                    titulo='Registrar'
                    dataLimpia={ dataLimpia }
                    setDataLimpia={setDataLimpia}
                />
            </ModalGenerico>
            {
                isOpenModalEdition &&
                <ModalGenerico isOpen={ isOpenModalEdition } closeModal={ closeModalEdition }>
                    <FormRegistroGrupo 
                        closeModal={ closeModalEdition } 
                        titulo='Editar Grupo' 
                        grupoEdit={nombreGrupo} 
                        idEdit={idGrupo} 
                        idMat={materiaID}
                        dataLimpia={dataLimpia}
                        setDataLimpia={setDataLimpia}
                        />
                </ModalGenerico>
            }
        </>
    )
}
