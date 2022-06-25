import React, { useEffect, useState } from 'react'

import { NavLink } from 'react-router-dom'

import { filtrarGrupos } from '../../helpers/filtrarGrupos'
import { obtenerAuxiliares } from '../../helpers/obtenerTiposDeUsuarios'
import { obtenerAuxiliaresPorId, obtenerUsuariosPorId } from '../../helpers/obtenerUsuarioPorID'
import { useModal } from '../../hooks/useModal'
import { getGrupoMateria } from '../../service/apiGrupoMaterias'
import { getUsuarios } from '../../service/apiUsuarios'
import { ModalGenerico } from '../Modal/ModalGenerico'
import Spinner from '../Spinner/Spinner'

import './estilos-ver-grupos.css'
import { ColumnasTablaGrupos } from './RegistrarGrupo/ColumnasTablaGrupos'
import { FormRegistroGrupo } from './RegistrarGrupo/FormRegistroGrupo'

export const VerGrupos = () => {
    
    const [isOpenModalCreate, openModalCreate, closeModalCreate] = useModal(false);
    const[isOpenModalEdition, openModalEdition, closeModalEdition] = useModal(false);

    const [listaMat, setListaMat] = useState({});

    const [datos, setDatos] = useState({
        id: '',
        grupo: ''
    })

    const [listaUsuarios, setListaUsuarios] = useState({
        state: false,
        data: []
    })

    const [grupoEditar, setGrupoEditar] = useState({
        idGrupo:'',
        nombreGrupo:'',
        estadoGrupo:''
    })

    const [dataLimpia, setDataLimpia] = useState([]);

    const materiaID = localStorage.getItem("id");
    const { id, grupo } = datos;
    const { idGrupo, nombreGrupo, estadoGrupo } = grupoEditar;

    useEffect(() => {
        getGrupoMateria(setListaMat);
        getUsuarios(setListaUsuarios);
    }, []);
    
    useEffect(() => {
        filtrarGrupos(listaMat.data,materiaID, setDataLimpia);
        
    }, [listaMat])
    

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
            <div className='contenedor-lista-grupos animate__animated animate__fadeIn'>
                <div className='contenedor-elementos-lista'>
                    <div className='contenedor-titulo-componente-tabla'>
                        <h2>Grupos registrados para la materia: { dataLimpia.length }</h2>
                        <div className='contenedor-btns-tabla-grupos'>
                            <button
                                className='btn-volver-grupo'
                            >
                                <NavLink exact='true' to='/admin/vermaterias' ><i className="bi bi-arrow-left-square-fill"></i></NavLink>
                            </button>
                            <button
                                className='btn-crear-grupo'
                                onClick={ openModalCreate }
                            >
                                <i className="bi bi-plus-square-fill"></i>
                            </button>
                        </div>
                    </div>
                    <hr/>
                    <div className='contenedor-tabla'>
                        {
                            listaUsuarios.state 
                            ?
                            <table>
                                <ColumnasTablaGrupos />
                                <tbody>
                                    {
                                        
                                        dataLimpia.map( (item, i) => (
                                            <tr key={ item.id }>
                                                <td className='col-id'>{i+1}</td>
                                                <td className='col-grupo'>{ item.grupoMateria }</td>
                                                <td> { item.estadoGrupoMateria } </td>
                                                <td>{ obtenerUsuariosPorId(listaUsuarios.data, item.idDocente) }</td>
                                                <td>{ obtenerAuxiliaresPorId( listaUsuarios.data, item.idAuxiliar ) }</td>
                                                <td className='td-btns'>
                                                    <section className='caja-btns'>
                                                        <button 
                                                            className='editar-grupo'
                                                            onClick={ () => ( editar(item.id, item.grupoMateria, item.estadoGrupoMateria) ) }
                                                        >
                                                            <i className="bi bi-pencil-fill"></i>
                                                        </button>
                                                    </section>
                                                </td>
                                            </tr>
                                        ))
                                        
                                    }
                                </tbody>
                            </table>
                            : <Spinner />
                        }
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
