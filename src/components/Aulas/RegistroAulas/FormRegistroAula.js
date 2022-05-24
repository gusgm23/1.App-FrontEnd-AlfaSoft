import React, { useEffect, useState } from 'react'

import { controlarCampoAula, controlarCampoCapacidad, validarCamposLlenosAula, validarCamposVaciosAula } from '../../../helpers/validarForms';
import { useForm } from '../../../hooks/useForm'
import { useModal } from '../../../hooks/useModal';
import { createAula } from '../../../service/apiAulas';
import { AdvertenciaFormVacio } from '../../Modal/Contenidos/AdvertenciaFormVacio';
import { Confirmacion } from '../../Modal/Contenidos/Confirmacion';
import { ErrorGuardarDatos } from '../../Modal/Contenidos/ErrorGuardarDatos';
import { Hecho } from '../../Modal/Contenidos/Hecho';
import { ModalGenerico } from '../../Modal/ModalGenerico';

import './estilosRegistroAula.css';

export const FormRegistroAula = ({ aulaEdi='', cap='', estado='', closeModal = () => {} }) => {
    
    const [ formValues, handleInputChange, reset ] = useForm({
        aula: aulaEdi,
        capacidad: cap
    })

    const { aula, capacidad } = formValues;

    const [isOpenModalFormVacio, openModalFormVacio, closeModalFormVacio] = useModal(false);
    const [isOpenModalConfirm, openModalConfirm, closeModalConfirm] = useModal(false);
    const [isOpenModalSuccess, openModalSuccess, closeModalSuccess] = useModal(false);
    const [isOpenModalWarning, openModalWarning, closeModalWarning] = useModal(false);

    const [statusInputCapacidad, setStatusInputCapacidad] = useState(false);
    const [statusInputAula, setStatusInputAula] = useState(false);

    const [aulaData, setaulaData] = useState({
      nombreAula: "",
      capacidadAula: "",
      estadoAula: "",
      solicitud_id: "",
    });

    useEffect(() => {
        if(capacidad === ''){
            setStatusInputCapacidad(false)
        }else{
            controlarCampoCapacidad( capacidad, setStatusInputCapacidad );
        }
    }, [capacidad])
    
    useEffect(() => {
        if( aula === '' ){
            setStatusInputAula(false)
        }else{
            controlarCampoAula( aula, setStatusInputAula );
        }
    }, [aula])
    

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

        const {aula,capacidad}=formValues;
        const data = {
          nombreAula: aula,
          capacidadAula: capacidad,
          estadoAula:  itemSeleccionado,
          habilitacionAula:"Habilitado"
        };

        createAula({data},1, openModalSuccess,openModalWarning);

    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("form values",e)
        console.log("aula", e.target[0].value);
        console.log("amount", e.target[1].value);
        console.log("status", e.target[2].value);

    }

    return (
        <div className='contenedor-registro-aula form-registro-aula'>
            <h2 className='titulo-registro-aula'>Registro de Aulas</h2>
            <form onSubmit={handleSubmit}>
                <div className='contenedor-general'>
                    <div className='contenedor-elementos'>
                        <div className='contenedor-aula contenedor-flex'>
                            <label className='labels'>Aula:</label>
                            <div className='contenedor-input'>
                                <input 
                                    name='aula'
                                    className={statusInputAula===true ? "input-error": "inputs"} 
                                    type='text'
                                    placeholder='690A'
                                    value={ aula }
                                    onChange={ handleInputChange }
                                    autoComplete='off'
                                />
                                <p className={ statusInputAula===true? "msj-error": "msj-error-oculto" }>
                                    Debes ingresar un nombre con almenos 3 letras y no más de 10 letras
                                </p>
                            </div>
                        </div>
                        <div className='contenedor-flex'>
                            <label className='labels'>Capacidad:</label>
                            <div className='contenedor-input'>
                                <input 
                                    name='capacidad'
                                    className={statusInputCapacidad===true ? "input-error": "inputs" }
                                    type='number'
                                    placeholder='10'
                                    value={ capacidad }
                                    onChange={ handleInputChange }
                                />
                                <p className={statusInputCapacidad===true? "msj-error": "msj-error-oculto"}
                                >
                                    Debe ingresar una cantidad entre 5 y 100
                                </p>
                            </div>
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
                            // type='submit' 
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

            <ModalGenerico isOpen={ isOpenModalWarning } closeModal={ closeModalWarning }>
                <ErrorGuardarDatos cerrarModal={ closeModalWarning }/>
            </ModalGenerico>
            <ModalGenerico isOpen={ isOpenModalSuccess } closeModal={ closeModalSuccess }>
                <Hecho cerrarModal={ closeModalSuccess }/>
            </ModalGenerico>
        </div>
    )
}
