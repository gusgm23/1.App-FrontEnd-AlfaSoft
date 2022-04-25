import React, { useEffect, useState } from 'react'
import { filtrarGrupos } from '../../helpers/filtrarGrupos';
import { useModal } from '../../hooks/useModal';
import { getGrupoMateria, getGrupoMateriaId } from '../../service/apiGrupoMaterias';
import { ModalGenerico } from '../Modal/ModalGenerico';
import { FormRegistroGrupo } from './RegistrarGrupo/FormRegistroGrupo';

export const TablaGrupos = ({data=[], cambio, setCambio}) => {
    
    const [values, setValues] = useState({
        id: '',
        grupo: ''
    });

    const [stateData, setStateData] = useState({
        state: false,
        dataMat:[]
    })

    const [dataLimpita, setDataLimpita] = useState([]);

    const { id, grupo } = values;
    const { state, dataMat } = stateData;
    const[isOpenModalEdition, openModalEdition, closeModalEdition] = useModal(false);
    const materiaID = localStorage.getItem("id");
    
    useEffect(() => {
        getGrupoMateria(setStateData);
        filtrarGrupos( dataMat, materiaID, setDataLimpita );
        console.log('se esta actualizando')
    }, [state, cambio]);
    

    const actualizar = (item) => {
        setValues({
            id: item.id,
            grupo: item.grupoMateria
        });

        openModalEdition();

    }
    
    return (
        <>
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
                            dataLimpita.map( (item, i) => (
                                <tr key={item.id}>
                                    <td
                                        className='col-id'
                                    >
                                        { i+1 }
                                    </td>
                                    <td
                                        className='col-grupo'
                                    >
                                        { item.grupoMateria }
                                    </td>
                                    <td> { item.estadoGrupoMateria } </td>
                                    <td className='td-btns'>
                                        <section className='caja-btns'>
                                            <button 
                                                className='btn-editar editar-grupo'
                                                onClick={ () => { actualizar(item) } }
                                            >
                                                Editar
                                            </button>
                                        </section>
                                    </td>
                                </tr>
                            )  )
                        }
                    </tbody>
                </table>
            </div>
            {
                isOpenModalEdition &&
                <ModalGenerico isOpen={ isOpenModalEdition } closeModal={ closeModalEdition }>
                    <FormRegistroGrupo 
                        closeModal={ closeModalEdition } 
                        titulo='Editar Grupo' 
                        grupoEdit={grupo} 
                        idEdit={id} 
                        idMat={materiaID} 
                        
                        />
                </ModalGenerico>
            }
        </>
    )
}
