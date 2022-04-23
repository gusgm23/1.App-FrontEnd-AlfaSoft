import React, { useEffect, useState } from 'react'
import { controlarCampoGrupo, validaCamposVaciosGrupo, validarCamposLlenosGrupo } from '../../../helpers/validarForms';
import { useForm } from '../../../hooks/useForm';
import { useModal } from '../../../hooks/useModal';
import { AdvertenciaFormVacio } from '../../Modal/Contenidos/AdvertenciaFormVacio';
import { Confirmacion } from '../../Modal/Contenidos/Confirmacion';
import { ErrorGuardarDatos } from '../../Modal/Contenidos/ErrorGuardarDatos';
import { Hecho } from '../../Modal/Contenidos/Hecho';
import { ModalGenerico } from '../../Modal/ModalGenerico';

export const FormRegistroGrupo = ({ idEdit='', grupoEdit='', titulo='', closeModal = () => {}, closeModalCreate = () => {} }) => {
    
    const [ formValues, handleInputChange, reset ] = useForm({
        id: idEdit,
        grupo: grupoEdit
    })

    const { id, grupo } = formValues;

    //Hooks par controlar Modales
    const [isOpenModalFormVacio, openModalFormVacio, closeModalFormVacio] = useModal(false);
    const [isOpenModalConfirm, openModalConfirm, closeModalConfirm] = useModal(false);
    const [isOpenModalWarning, openModalWarning, closeModalWarning] = useModal(false);
    const [isOpenModalSuccess, openModalSuccess, closeModalSuccess] = useModal(false);

    //Hooks para controlar contenido de campo grupo
    const [StatusInputGrupo, setStatusInputGrupo] = useState(false);

    //Hooks para mostrar mensajes de errores en los campos respectivos
    const [MsjErrorGroup, setMsjErrorGroup] = useState('');

    useEffect(() => {
        if( grupo === '' ){
            setStatusInputGrupo(false);
        }else{
            controlarCampoGrupo( grupo, setStatusInputGrupo, setMsjErrorGroup );
        }
    }, [grupo])
    
    
    const handleSubmit = (e) => {

        e.preventDefault();

    }

    const validarForm = () => {

        if( validaCamposVaciosGrupo(formValues) ){
            openModalFormVacio();
        }else{

            if( validarCamposLlenosGrupo(formValues) ){
                openModalConfirm();
            }else{
                console.log('no cumple');
            }

        }

    }

    const guardarDatos = () => {
        console.log(' datos a guardar ', formValues);
    }

    return (
        <div className='contenedor-registro-aula form-registro-aula'>
            <h2 className='titulo-registro-aula'> { titulo === ''? 'Registrar grupo' : titulo } </h2>
            
                <div className='contenedor-general'>
                    <div className='contenedor-elementos'>
                        <div className='contenedor-flex-registrar-grupo'>
                            <label className='labels'>Grupo:</label>
                            <div className='contenedor-input-crear-grupo'>
                                <input
                                    name='grupo'
                                    className={ StatusInputGrupo===true? "input-error-crear-grupo": "input-crear-grupo" }
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
                        <div className='contenedor-botones'>
                            <button
                                className='btn btn-warning btn-form-crear-grupo'
                                onClick={ 
                                    grupo === '' ? closeModalCreate : closeModal
                                }
                            >
                                Cancelar
                            </button>
                            <button 
                                className='btn btn-primary btn-form-crear-grupo'
                                onClick={ validarForm }
                            >
                                Crear
                            </button>
                        </div>
                    </div>
                </div>
            
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
