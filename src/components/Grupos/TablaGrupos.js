import React, { useState } from 'react'
import { useModal } from '../../hooks/useModal';
import { ModalGenerico } from '../Modal/ModalGenerico';
import { FormRegistroGrupo } from './RegistrarGrupo/FormRegistroGrupo';

export const TablaGrupos = ({data=[]}) => {
    
    const [values, setValues] = useState({
        id: '',
        grupo: ''
    });

    const { id, grupo } = values;
    const[isOpenModalEdition, openModalEdition, closeModalEdition] = useModal(false);
    
    const actualizar = (item) => {
        setValues({
            id: item.id,
            grupo: item.grupo
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
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map( (item, i) => (
                                <tr key={item.id}>
                                    <td
                                        className='col-id'
                                    >
                                        { i+1 }
                                    </td>
                                    <td
                                        className='col-grupo'
                                    >
                                        { item.grupo }
                                    </td>
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
                    <FormRegistroGrupo closeModal={ closeModalEdition } titulo='Editar Grupo' grupoEdit={grupo} idEdit={id}/>
                </ModalGenerico>
            }
        </>
    )
}
