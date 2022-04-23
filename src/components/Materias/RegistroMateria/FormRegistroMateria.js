import React, { useEffect, useState } from 'react'

import { controlarCampoCodSis, controlarCampoGrupo, controlarCampoMateria, ObtenerListaMaterias, validarCamposLlenosMateria, validarCamposVaciosMateria, verificarExistenciaMateria } from '../../../helpers/validarForms';
import { useForm } from '../../../hooks/useForm';
import { useModal } from '../../../hooks/useModal';
import { ModalGenerico } from '../../Modal/ModalGenerico';
import { AdvertenciaFormVacio } from '../../Modal/Contenidos/AdvertenciaFormVacio';
import { Confirmacion } from '../../Modal/Contenidos/Confirmacion';

//importacion de las APIs para materia
import { getMateria, getMateriaId, createMateria, updateMateriaId, deleteMateriaId } from '../../../service/apiMateria';
import { ErrorGuardarDatos } from '../../Modal/Contenidos/ErrorGuardarDatos';
import { Hecho } from '../../Modal/Contenidos/Hecho';

export const FormRegistroMateria = ({ codiSis='', materi='', group='', closeModal = () => {} }) => {
    
    const [formValues, handleInputChange, reset] = useForm({
        codSis: codiSis,
        materia: materi,
        grupo: group
    })

    const { codSis, materia, grupo } = formValues;

    //Hooks para controlar Modales
    const [isOpenModalFormVacio, openModalFormVacio, closeModalFormVacio] = useModal(false);
    const [isOpenModalConfirm, openModalConfirm, closeModalConfirm] = useModal(false);
    const [isOpenModalWarning, openModalWarning, closeModalWarning] = useModal(false);
    const [isOpenModalSuccess, openModalSuccess, closeModalSuccess] = useModal(false);

    //Hooks para controlar contenido de campos
    const [StatusInputCodSis, setStatusInputCodSis] = useState(false);
    const [StatusInputMateria, setStatusInputMateria] = useState(false);
    const [StatusInputGrupo, setStatusInputGrupo] = useState(false);

    //Hooks para mostrar mensajes de errores en los campos respectivos
    const [MsjErrorMateria, setMsjErrorMateria] = useState('');
    const [MsjErrorGroup, setMsjErrorGroup] = useState('');

    const [listaMaterias, setListaMaterias] = useState({
        state: false,
        data: []
    });

    const { state, data } = listaMaterias;
    
    useEffect(() => {
        if( codSis === '' ){
            setStatusInputCodSis(false);
        }else{
            controlarCampoCodSis( codSis, setStatusInputCodSis );
        }
    }, [codSis])
    
    useEffect(() => {
        
        if( materia === '' ){
            setStatusInputMateria(false);
        }else{
            controlarCampoMateria( materia, setStatusInputMateria, setMsjErrorMateria )
        }

    }, [materia])
    
    useEffect(() => {
        
        if( grupo === '' ){
            setStatusInputGrupo(false);
        }else{
            controlarCampoGrupo( grupo, setStatusInputGrupo, setMsjErrorGroup );
        }

    }, [grupo]);

    useEffect(() => {
        getMateria( setListaMaterias );
    }, [])
    

    const handleSubmit = (e) => {
        
        e.preventDefault();

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
        
        // createMateria( formValues, `materia-${data.length+1}`, 'user-1', openModalSuccess, openModalWarning );
        console.log(verificarExistenciaMateria());
    }

    return (
        <div className='contenedor-registro-aula form-registro-aula'>
            <h2 className='titulo-registro-aula'>Registro de Materia</h2>
            <form onSubmit={ handleSubmit }>
                <div className='contenedor-general'>
                    <div className='contenedor-elementos'>
                        <div className='contenedor-aula contenedor-flex'>
                            <label className='labels'>Código SIS:</label>
                            <div className='contenedor-input'>
                                <input 
                                    name='codSis'
                                    className={ StatusInputCodSis===true ? "input-error": "inputs" } 
                                    type='number'
                                    placeholder='201002903'
                                    value={ codSis }
                                    onChange={ handleInputChange }
                                />
                                <p className={ StatusInputCodSis===true? "msj-error": "msj-error-oculto" }>
                                    Debe ingresar un valor mayor a 8 digitos y no más de 9
                                </p>
                            </div>
                        </div>
                        <div className='contenedor-flex'>
                            <label className='labels'>Materia:</label>
                            <div className='contenedor-input'>
                                <input 
                                    name='materia'
                                    className={ StatusInputMateria ===true ? "input-error": "inputs" }
                                    type='text'
                                    placeholder='Algebra II'
                                    value={ materia }
                                    onChange={ handleInputChange }
                                    autoComplete='off'
                                />
                                <p className={ StatusInputMateria===true? "msj-error": "msj-error-oculto" }>
                                    { MsjErrorMateria }
                                </p>
                            </div>
                        </div>
                        <div className='contenedor-flex'>
                            <label className='labels'>Grupo:</label>
                            <div className='contenedor-input'>
                                <input
                                    name='grupo'
                                    className={ StatusInputGrupo===true? "input-error": "inputs" }
                                    type='text'
                                    placeholder='6A'
                                    value={ grupo }
                                    onChange={ handleInputChange }
                                    autoComplete='off'
                                />
                                <p className={ StatusInputGrupo===true? "msj-error": "msj-error-oculto" }>
                                    { MsjErrorGroup }
                                </p>
                            </div>
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
            <ModalGenerico isOpen={ isOpenModalWarning } closeModal={ closeModalWarning }>
                <ErrorGuardarDatos cerrarModal={ closeModalWarning }/>
            </ModalGenerico>
            <ModalGenerico isOpen={ isOpenModalSuccess } closeModal={ closeModalSuccess }>
                <Hecho cerrarModal={ closeModalSuccess }/>
            </ModalGenerico>
        </div>
    )
}