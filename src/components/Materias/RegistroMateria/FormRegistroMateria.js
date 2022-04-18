import React from 'react'

import { validarCamposLlenosMateria, validarCamposVaciosMateria } from '../../../helpers/validarForms';
import { useForm } from '../../../hooks/useForm';
import { useModal } from '../../../hooks/useModal';
import { ModalGenerico } from '../../Modal/ModalGenerico';
import { AdvertenciaFormVacio } from '../../Modal/Contenidos/AdvertenciaFormVacio';
import { Confirmacion } from '../../Modal/Contenidos/Confirmacion';

export const FormRegistroMateria = ({ codiSis='', materi='', group='', closeModal = () => {} }) => {
    
    const [formValues, handleInputChange, reset] = useForm({
        codSis: codiSis,
        materia: materi,
        grupo: group
    })

    const { codSis, materia, grupo } = formValues;

    const [isOpenModalFormVacio, openModalFormVacio, closeModalFormVacio] = useModal(false);
    const [isOpenModalConfirm, openModalConfirm, closeModalConfirm] = useModal(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(formValues)

    }
    
    const validarForm = () => {
        if(validarCamposVaciosMateria(formValues)){
            openModalFormVacio();
        }else{
            
            if( validarCamposLlenosMateria(formValues) ){
                openModalConfirm();
            }else{
                console.log(typeof(codSis));
                console.log('cumple´nt');
            }

        }
    }

    const guardarDatos = () => {
        console.log('guardando datos de nueva materia', formValues);
    }

    return (
        <div className='contenedor-registro-aula form-registro-aula'>
            <h2 className='titulo-registro-aula'>Registro de Materia</h2>
            <form onSubmit={ handleSubmit }>
                <div className='contenedor-general'>
                    <div className='contenedor-elementos'>
                        <div className='contenedor-aula contenedor-flex'>
                            <label className='labels'>Código SIS:</label>
                            <input 
                                name='codSis'
                                className='inputs' 
                                type='number'
                                placeholder='201002903'
                                value={ codSis }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className='contenedor-flex'>
                            <label className='labels'>Materia:</label>
                            <input 
                                name='materia'
                                className='inputs' 
                                type='text'
                                placeholder='Algebra II'
                                value={ materia }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className='contenedor-flex'>
                            <label className='labels'>Grupo:</label>
                            <input
                                name='grupo'
                                className='inputs' 
                                type='text'
                                placeholder='6A'
                                value={ grupo }
                                onChange={ handleInputChange }
                            />
                        </div>
                    </div>
                    <div className='contenedor-botones'>
                        <button 
                            type='button' 
                            className='btn btn-warning'
                            onClick={ 
                                codiSis === '' ? reset : closeModal
                            }
                        >
                            Cancelar
                        </button>
                        <button 
                            type='submit' 
                            className='btn btn-primary'
                            onClick={validarForm}
                        >
                            Guardar
                        </button>
                    </div>
                </div>
            </form>
            <ModalGenerico isOpen={ isOpenModalFormVacio } closeModal={ closeModalFormVacio }>
                <AdvertenciaFormVacio cerrarModal={ closeModalFormVacio }/>
            </ModalGenerico>
            <ModalGenerico isOpen={ isOpenModalConfirm } closeModal={ closeModalConfirm }>
                <Confirmacion cerrarModal={closeModalConfirm} funcGuardar={guardarDatos}/>
            </ModalGenerico>
        </div>
    )
}
