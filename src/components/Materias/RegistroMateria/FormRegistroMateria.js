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
import { useNavigate } from 'react-router-dom';

export const FormRegistroMateria = ({ codiSis='', materi='', group='', closeModal = () => {}, titulo='' , idMat='', dataOptenida, setListaMateria}) => {
    
    const [formValues, handleInputChange, reset] = useForm({
        codSis: codiSis,
        materia: materi,
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
    const [codExiste, setCodExiste] = useState(false);
    const [materiaExiste, setMateriaExiste] = useState(false)

    //Hooks para mostrar mensajes de errores en los campos respectivos
    const [MsjErrorMateria, setMsjErrorMateria] = useState('');

    //Hook para estado de peticion de materias
    const [statePerition, setStatePetition] = useState(false);

    //!Hook para controlar estado de combobox
    const [selects, setSelects] = useState('Habilitado')

    //! hook para navegar
    const navigate = useNavigate();

    const [listaMaterias, setListaMaterias] = useState({
        state: false,
        data: []
    });

    const [sePuedeGuardar, setSePuedeGuardar] = useState(false);

    const { state, data } = listaMaterias;
    
    useEffect(() => {
        if( codSis === '' ){
            setStatusInputCodSis(false);
        }else{
            controlarCampoCodSis( codSis, setStatusInputCodSis );
        }

        setCodExiste(false);

    }, [codSis])
    
    useEffect(() => {
        
        if( materia === '' ){
            setStatusInputMateria(false);
        }else{
            controlarCampoMateria( materia, setStatusInputMateria, setMsjErrorMateria )
        }

        setMateriaExiste(false);

    }, [materia])

    useEffect(() => {
        getMateria( setListaMaterias );
    }, [statePerition]);
    
    const handleSubmit = (e) => {
        
        e.preventDefault();

    }
    
    useEffect(() => {
        verificarExistenciaMateria(listaMaterias, formValues, setMateriaExiste, setCodExiste , setSePuedeGuardar , codiSis, materi);
    }, [formValues])
    
    
    const validarForm = () => {
        if(validarCamposVaciosMateria(formValues)){
            openModalFormVacio();
        }else{
            
            if( validarCamposLlenosMateria(formValues)){
                if(!codExiste && !materiaExiste){
                    openModalConfirm();
                }
            }else{
                console.log(typeof(codSis));
                console.log('cumple´nt');
            }

        }
    }

    const editarMateria = (codigoSisEditar, materiaEditar, eleccion) => {

        console.log(codigoSisEditar, materiaEditar, eleccion, data)

        const arreglo = data;

        let contador = 0;

        arreglo.map( (materia) => {
            if( idMat == materia.id ){
                arreglo[contador].codigoMateria = codigoSisEditar;
                arreglo[contador].nombreMateria = materiaEditar;
                arreglo[contador].estadoMateria = eleccion;
            console.log('sss')
            }
            contador++;
        } );

        setListaMateria({
            state: true,
            data: arreglo
        });

    }
    
    const guardarDatos = () => {
        setStatePetition(true);
        
        if(idMat === ''){
            createMateria( formValues, '1', selects, openModalSuccess, openModalWarning );
        }else{
            updateMateriaId( formValues, '1', selects, openModalSuccess, openModalWarning, idMat );
            editarMateria(codSis, materia, selects);
        }
    }

    const volverAtras = () => {
        
        navigate(-1);

    }

    return (
        <div className='contenedor-registro-aula form-registro-aula'>
            <h2 className='titulo-registro-aula'>{ titulo === ''? 'Registrar materia': `${titulo} materia` }</h2>
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
                                <p className={ codExiste===true? "msj-error": "msj-error-oculto" }>
                                    El código SIS ingresado ya se encuentra registrado.
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
                                <p className={ materiaExiste===true? "msj-error": "msj-error-oculto" }>
                                    El nombre de la materia ingresada ya se fue registrado.
                                </p>
                            </div>
                        </div>
                        <div className='contenedor-flex'>
                            <label className='labels'>Estado:</label>
                            <div className='contenedor-input'>
                                <select className='inputs' value={selects} onChange={ e => setSelects( e.target.value ) }>
                                    <option>Habilitado</option>
                                    <option>Deshabilitado</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='contenedor-botones'>
                        <button 
                            type='button' 
                            className='btn btn-warning'
                            onClick={ 
                                codiSis === '' ? volverAtras : closeModal
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
