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
        <div className='contenedor-registro-soli'>

                <div className='titulo-registro-soli'>
                    Registro de Solicitud
                    </div>

            <form>
                <div className='contenedor-general-soli'>
                    <div className='contenedor-elementos-soli'>
                        <div className='contenedor-soli contenedor-flex-soli'>
                            <label className='labels-soli'>Nombre del Docente:</label>
                            <input 
                                name='nomDocente'
                                className='inputs-soli' 
                                type='text'
                                placeholder='Escalera Fernandez David'
                                value={ nomDocente }
                                onChange={ handleInputChange }
                                disabled
                            />
                        </div>
                        <div className='contenedor-soli contenedor-flex-soli'>
                            <label className='labels-soli'>Apellido del Docente:</label>
                            <input 
                                name='apeDocente'
                                className='inputs-soli' 
                                type='text'
                                placeholder='-----'
                                value={ apeDocente }
                                onChange={ handleInputChange }
                                disabled
                            />
                        </div>
                        <div className='contenedor-flex-soli'>
                            <label className='labels-soli'>Numero de estudiantes:</label>
                            <input 
                                name='nroEst'
                                className='inputs-soli' 
                                type='number'
                                placeholder='---------'
                                value={ nroEst}
                                onChange={ handleInputChange }
                                disabled
                            />
                        </div>
                        <div className='contenedor-flex-soli'>
                            <label className='labels-soli'>Motivo de la Reserva:</label>
                            <input 
                                name='motivoSol'
                                className='inputs-soli' 
                                type='text'
                                placeholder='-------'
                                value={ motivoSol }
                                onChange={ handleInputChange }
                                disabled
                            />
                        </div>
                        <div className='contenedor-flex-soli'>
                            <label className='labels-soli'>Fecha de la Reserva:</label>
                            <input 
                                name='fechaSol'
                                className='inputs-soli' 
                                type='text'
                                placeholder='----'
                                value={ fechaSol }
                                onChange={ handleInputChange }
                                disabled
                            />
                        </div>
                        <div className='contenedor-flex-soli'>
                            <label className='labels-soli'>Hora de la Reserva:</label>
                            <input 
                                name='horaSol'
                                className='inputs-soli' 
                                type='text'
                                placeholder='------'
                                value={ horaSol }
                                onChange={ handleInputChange }
                                disabled
                            />
                        </div>
                        <div className='contenedor-flex-soli'>
                            <label className='labels-soli'>Periodo:</label>
                            <input 
                                name='periodoSol'
                                className='inputs-soli' 
                                type='text'
                                placeholder='------'
                                value={ periodoSol }
                                onChange={ handleInputChange }
                                disabled
                            />
                        </div>
                        <div className='contenedor-flex-soli'>
                            <label className='labels-soli'>Estado:</label>
                            <input 
                                name='estSol'
                                className='inputs-soli' 
                                type='text'
                                placeholder='-------'
                                value={ estSol }
                                onChange={ handleInputChange }
                                disabled
                            />
                        </div>
                        
                    </div>
                    <div className='contenedor-botones-soli'>
                        <button 
                            type='button-soli' 
                            className='btn-soli btn-warning'
                            inClick={ nomDocente === ''? reset : closeModal}
                        >
                            Cerrar
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
