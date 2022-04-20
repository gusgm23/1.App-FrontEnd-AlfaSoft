import React from 'react'
import { validarCamposLlenosAula, validarCamposVaciosAula } from '../../../helpers/validarForms';
import { useForm } from '../../../hooks/useForm'
import { useModal } from '../../../hooks/useModal';
import { AdvertenciaFormVacio } from '../../Modal/Contenidos/AdvertenciaFormVacio';
import { Confirmacion } from '../../Modal/Contenidos/Confirmacion';
import { ModalGenerico } from '../../Modal/ModalGenerico';

export const FormRegistroAula = ({ aulaEdi='', cap='', estado='', closeModal = () => {} }) => {
    
    const [ formValues, handleInputChange, reset ] = useForm({
        aula: aulaEdi,
        capacidad: cap
    })

    const { aula, capacidad } = formValues;

    const [isOpenModalFormVacio, openModalFormVacio, closeModalFormVacio] = useModal(false);
    const [isOpenModalConfirm, openModalConfirm, closeModalConfirm] = useModal(false);
    
    const validarFormulario = () => {
        
        const seleccion = document.getElementById('estados');
        const itemSeleccionado = seleccion.options[seleccion.selectedIndex].value;

        if( validarCamposVaciosAula( formValues, itemSeleccionado )){
            openModalFormVacio();
        }else{
            if( validarCamposLlenosAula(formValues) ){
                openModalConfirm();
            }else{
                console.log('datos no cumplen');
            }
        }
    }

    const guardarDatos = () => {
        
        const seleccion = document.getElementById('estados');
        const itemSeleccionado = seleccion.options[seleccion.selectedIndex].value;
        console.log('datos a guardar: ', formValues, itemSeleccionado);

    }

    return (
        <div className='contenedor-registro-aula form-registro-aula'>
            <h2 className='titulo-registro-aula'>Registro de Aulas</h2>
            <form>
                <div className='contenedor-general'>
                    <div className='contenedor-elementos'>
                        <div className='contenedor-aula contenedor-flex'>
                            <label className='labels'>Aula:</label>
                            <input 
                                name='aula'
                                className='inputs' 
                                type='text'
                                placeholder='690A'
                                value={ aula }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className='contenedor-flex'>
                            <label className='labels'>Capacidad:</label>
                            <input 
                                name='capacidad'
                                className='inputs' 
                                type='number'
                                placeholder='10'
                                value={ capacidad }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className='contenedor-flex'>
                            <label className='labels'>Estado:</label>
                            <select id='estados' className='inputs'>
                                <option value='estado' defaultValue='selected'>Estado</option>
                                <option value='deshabilitado' >Deshabilitado</option>
                                <option value='libre' >Libre</option>
                                <option value='ocupado' >Ocupado</option>
                            </select>
                        </div>
                    </div>
                    <div className='contenedor-botones'>
                        <button 
                            type='button' 
                            className='btn btn-warning'
                            onClick={
                                aulaEdi === '' ? reset : closeModal
                            }
                        >
                            Cancelar
                        </button>
                        <button 
                            type='button' 
                            className='btn btn-primary'
                            onClick={validarFormulario}
                        >
                            Confirmar
                        </button>
                    </div>
                </div>
            </form>
            <ModalGenerico isOpen={isOpenModalFormVacio} closeModal={ closeModalFormVacio }>
                <AdvertenciaFormVacio cerrarModal={closeModalFormVacio}/>
            </ModalGenerico>
            <ModalGenerico isOpen={isOpenModalConfirm} closeModal={ closeModalConfirm }>
                <Confirmacion cerrarModal={ closeModalConfirm } funcGuardar={ guardarDatos }/>
            </ModalGenerico>
        </div>
    )
}
