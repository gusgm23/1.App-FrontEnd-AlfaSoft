import React, { useEffect, useState } from 'react'
import './estilosRegistroSol.css'

import { controlarCampoNomDocente, controlarCampoApeDocente, controlarCampoCantidad, controlarCampoMotivo, controlarCampoPeriodo, validarCamposVaciosSolicitud, validarCamposLlenosSolicitud } from '../../../helpers/validarForms';
import { useForm } from '../../../hooks/useForm'
import { useModal } from '../../../hooks/useModal'
import { ModalGenerico } from '../../Modal/ModalGenerico'
import { AdvertenciaFormVacio } from '../../Modal/Contenidos/AdvertenciaFormVacio'
import { Confirmacion } from '../../Modal/Contenidos/Confirmacion';
import { Hecho } from '../../Modal/Contenidos/Hecho';
import { ErrorGuardarDatos } from '../../Modal/Contenidos/ErrorGuardarDatos';

//Importacion de las APIs para la solicitud
import { getSolicitud, getSolicitudId, createSolicitud, updateSolicitudId, deleteSolicitud } from '../../../service/apiSolicitudAulas';


export const RegSolicitud = ({

        nombre_doc      ='',
        ape_doc         ='',
        nro_est         ='',
        motivo          ='',
        fecha_res       ='',
        hora_res        ='',
        periodo         ='',
        estado          ='',
        closeModal = () => {}, idsolicitud=''
    }) => {
    
    const [formValues, handleInputChange, reset] = useForm({
        nomDocente:     nombre_doc,
        apeDocente:     ape_doc,
        nroEst:         nro_est,
        motivoSol:      motivo,
        fechaSol:       fecha_res,
        horaSol:        hora_res,
        periodoSol:     periodo,
        estSol:         estado,
    })

    const { nomDocente, apeDocente, nroEst, motivoSol, fechaSol, horaSol, periodoSol, estSol} = formValues;

    //hooks para controlar contenidos de campos
    const [StatusInputNomDocente, setStatusInputNomDoc] = useState(false);
    const [StatusInputApeDocente, setStatusInputApeDoc] = useState(false);
    const [StatusInputNroEst, setStatusInputNroEst] = useState(false);
    const [StatusInputMotivo, setStatusInputMotivo] = useState(false);
    const [StatusInputPeriodo, setStatusInputPeriodo] = useState(false);
    const [StatusInputEstado, setStatusInputEstado] = useState(false);

    //Hooks para mostrar el mensaje de error en los campos
    const [MsjErrorNomDocente, setMsjErrorNomDoc] = useState('');
    const [MsjErrorApeDocente, setMsjErrorApeDoc] = useState('');
    const [MsjErrorCantidad, setMsjErrorNroEst] = useState('');
    const [MsjErrorMotivo, setMsjErrorMotivo] = useState('');
    const [MsjErrorPeriodo, setMsjErrorPeriodo] = useState('');
    const [MsjErrorEstado, setMsjErrorEstado] = useState('');

    //Hooks para el estado de las peticiones de la solicitud
    const [StatePetition, setStatePetition] = useState(false);

    //Hooks para controlar modales
    const [isOpenModalConfirm, openModalConfirm, closeModalConfirm] = useModal(false);
    const [isOpenModalWarning, openModalWarning, closeModalWarning] = useModal(false);
    const [isOpenModalSuccess, openModalSuccess, closeModalSuccess] = useModal(false);
    const [isOpenModalFormVacio, openModalFormVacio, closeModalFormVacio] = useModal(false);

    
    useEffect(() => {
        if( nomDocente === ''){
            setStatusInputNomDoc(false);
        }else{
            controlarCampoNomDocente( nomDocente, setStatusInputNomDoc, setMsjErrorNomDoc);
        }
    }, [nomDocente])

    useEffect(() => {
        if( apeDocente === ''){
            setStatusInputApeDoc(false);
        }else{
            controlarCampoApeDocente( apeDocente, setStatusInputApeDoc, setMsjErrorApeDoc);
        }
    }, [apeDocente])

    useEffect(() => {
        if( nroEst === '' ){
            setStatusInputNroEst(false);
        }else{
            controlarCampoCantidad( nroEst, setStatusInputNroEst, setMsjErrorNroEst );
        }
    }, [nroEst])

    useEffect(() => {
        if( motivoSol === '' ){
            setStatusInputMotivo(false);
        }else{
            controlarCampoMotivo( motivoSol, setStatusInputMotivo, setMsjErrorMotivo );
        }
    }, [motivoSol])

    useEffect(() => {
        if( periodoSol === ''){
            setStatusInputPeriodo(false);
        }else {
            controlarCampoPeriodo( periodoSol, setStatusInputPeriodo, setMsjErrorPeriodo );
        }
    }, [periodoSol])
/*
    useEffect(() => {
        if( estSol === ''){
            setStatusInputEstado(false);
        }else {
            controlarCampoEstado( estSol, setStatusInputEstado, setMsjErrorEstado );
        }
    }, [estSol])
*/

    const validarForm = () => {
        if( validarCamposVaciosSolicitud(formValues) ){
            openModalFormVacio();
        }else {
            if( validarCamposLlenosSolicitud(formValues) ){
                openModalConfirm();
            }else {
                console.log(typeof(nomDoc));
                console.log('logrado');
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    //Para enviar los datos del formulario 
    const guardarDatosFormulario = () => {
        setStatePetition(true);

        const seleccion = document.getElementById('estados');
        const itemSeleccionado = seleccion.options[ seleccion.selectedIndex ].value;

        if( idsolicitud === '' ) {
            createSolicitud( formValues, '1', itemSeleccionado, openModalSuccess, openModalWarning );
        }
    }

    return (
        <div className='contenedor-registro-aula'>

                <div className='titulo-registro-aula'>
                    Registro de Solicitud
                    </div>

            <form>
                <div className='contenedor-general'>
                    <div className='contenedor-elementos'>
                        <div className='contenedor-aula contenedor-flex'>
                            <label className='labels'>Nombre del Docente:</label>
                            <input 
                                name='nomDocente'
                                className='inputs' 
                                type='text'
                                placeholder='Escalera Fernandez David'
                                value={ nomDocente }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className='contenedor-aula contenedor-flex'>
                            <label className='labels'>Apellido del Docente:</label>
                            <input 
                                name='apeDocente'
                                className='inputs' 
                                type='text'
                                placeholder='-----'
                                value={ apeDocente }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className='contenedor-flex'>
                            <label className='labels'>Numero de estudiantes:</label>
                            <input 
                                name='nroEst'
                                className='inputs' 
                                type='number'
                                placeholder='---------'
                                value={ nroEst}
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className='contenedor-flex'>
                            <label className='labels'>Motivo de la Reserva:</label>
                            <input 
                                name='motivoSol'
                                className='inputs' 
                                type='text'
                                placeholder='-------'
                                value={ motivoSol }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className='contenedor-flex'>
                            <label className='labels'>Fecha de la Reserva:</label>
                            <input 
                                name='fechaSol'
                                className='inputs' 
                                type='text'
                                placeholder='----'
                                value={ fechaSol }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className='contenedor-flex'>
                            <label className='labels'>Hora de la Reserva:</label>
                            <input 
                                name='horaSol'
                                className='inputs' 
                                type='text'
                                placeholder='------'
                                value={ horaSol }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className='contenedor-flex'>
                            <label className='labels'>Periodo:</label>
                            <input 
                                name='periodoSol'
                                className='inputs' 
                                type='text'
                                placeholder='------'
                                value={ periodoSol }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className='contenedor-flex'>
                            <label className='labels'>Estado:</label>
                            <input 
                                name='estSol'
                                className='inputs' 
                                type='text'
                                placeholder='-------'
                                value={ estSol }
                                onChange={ handleInputChange }
                            />
                        </div>
                        
                    </div>
                    <div className='contenedor-botones'>
                        <button 
                            type='button' 
                            className='btn btn-warning'
                            onClick={ nomDocente === ''? reset : closeModal}
                        >
                            Cancelar
                        </button>
                        <button 
                            type='button' 
                            className='btn btn-primary'
                            onClick={validarForm}
                        >
                            Confirmar
                        </button>
                    </div>
                </div>
            </form>
            <ModalGenerico isOpen={ isOpenModalFormVacio } closeModal={ closeModalFormVacio } >
                <AdvertenciaFormVacio cerrarModal={ closeModalFormVacio } />
            </ModalGenerico>
        
            <ModalGenerico isOpen={ isOpenModalConfirm } closeModal={ closeModalConfirm }>
                <Confirmacion cerrarModal={ closeModalConfirm } funcGuardar={ guardarDatosFormulario } />
            </ModalGenerico>

            <ModalGenerico isOpen={ isOpenModalWarning } closeModal={ closeModalWarning } >
                <ErrorGuardarDatos cerrarModal={ closeModalWarning } />
            </ModalGenerico>

            <ModalGenerico isOpen={ isOpenModalSuccess } closeModal={ closeModalSuccess }>
                <Hecho cerrarModal={ closeModalSuccess } />
            </ModalGenerico>
        </div>
    )
}
